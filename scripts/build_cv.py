"""Build the bilingual, single-page agency CV with ReportLab."""
import argparse
import json
import os
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument('--lang', choices=['en', 'sr'], default='en')
LANG = parser.parse_args().lang
SR = json.loads((ROOT / 'scripts/cv_sr.json').read_text())
FONT = Path(os.environ.get('CV_FONT_DIR', '/System/Library/Fonts/Supplemental'))
for name, file in [('Body', 'Arial.ttf'), ('Body-Bold', 'Arial Bold.ttf'), ('Display', 'Georgia.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT / file)))
pdfmetrics.registerFontFamily('Body', normal='Body', bold='Body-Bold')
OUT = ROOT / f'output/pdf/Karolina-Lukac-Translator-CV-{LANG.upper()}.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Karolina Lukač | Prevodilac za srpski i engleski | CV' if LANG == 'sr' else 'Karolina Lukač | Serbian-English Translator | CV')
c.setAuthor('Karolina Lukač')
c.setSubject('Prevodilačke usluge - saradnja sa agencijama' if LANG == 'sr' else 'Freelance translation - agency collaboration')
W, H = A4
INK, GREEN, MUTED, OLIVE = '#253E33', '#244E3C', '#58685F', '#7B895B'
def tr(en, sr=None):
    return (sr if sr is not None else SR.get(en,en)) if LANG=='sr' else en

def line(x1,y1,x2,y2,color='#D7DFD2',weight=.6):
    c.setStrokeColor(HexColor(color));c.setLineWidth(weight);c.line(x1,y1,x2,y2)

def para(text,x,y,width,size=9.3,leading=13.2,font='Body',color=INK):
    p=Paragraph(text,ParagraphStyle('cv',fontName=font,fontSize=size,leading=leading,textColor=HexColor(color)))
    _,h=p.wrap(width,H);p.drawOn(c,x,y-h)
    return y-h

class Column:
    def __init__(self,x,y,width):self.x,self.y,self.width=x,y,width
    def p(self,text,after=7,**kw):
        self.y=para(text,self.x,self.y,self.width,**kw)-after
    def section(self,label):
        anchors = {
            tr('EDUCATION'): 535,
            tr('TRANSLATION EXPERIENCE'): 416,
            tr('PROFESSIONAL TRAINING','STRUČNO USAVRŠAVANJE'): 251,
        } if self.x == 216 else {}
        if label in anchors:
            target = anchors[label] + 13
            assert self.y >= target - 1, f'Section overlap: {label}: {self.y} < {target}'
            self.y = target
        self.y-=13
        line(self.x,self.y,self.x+self.width,self.y)
        self.y-=11
        self.p(label,size=8,leading=10,font='Body-Bold',color=GREEN,after=12)

# Restrained editorial header: warm paper, large serif name, small language badge.
c.setFillColor(HexColor('#F3F3EB'));c.rect(0,H-168,W,168,fill=1,stroke=0)
c.setFillColor(HexColor(GREEN));c.rect(0,H-5,W,5,fill=1,stroke=0)
para(tr('TRANSLATION / AGENCY COLLABORATION','PREVOĐENJE / SARADNJA SA AGENCIJAMA'),38,H-28,440,size=8,leading=10,font='Body-Bold',color=OLIVE)
para('Karolina Lukač',36,H-52,470,size=37,leading=45,font='Display',color=GREEN)
para(tr('Freelance translator','Samostalni prevodilac'),39,H-107,400,size=12,leading=16,color=GREEN)
para(tr('Serbian &amp; English','Srpski i engleski'),39,H-132,390,size=10,leading=14,color=MUTED)
# Place the supplied photograph unchanged; no retouching or generated likeness.
c.drawImage(str(ROOT / 'assets/karolina-lukac-portrait.png'), W-154, H-145,
            width=116, height=116, preserveAspectRatio=True, mask='auto')

# Left rail: contact and quick reference. Text remains selectable; links are live.
left=Column(38,H-190,143)
c.setFillColor(HexColor('#F1F3EC'));c.rect(25,48,170,H-228,fill=1,stroke=0)
left.p(tr('CONTACT','KONTAKT'),size=8,leading=10,font='Body-Bold',color=GREEN,after=13)
left.p(tr('Serbia','Srbija'),size=9,leading=13,after=6)
left.p('<link href="mailto:karolinalukac@gmail.com" color="#244E3C">karolinalukac@gmail.com</link>',size=8.5,leading=13,after=5)
left.p('<link href="tel:+381603204554" color="#244E3C">+381 60 3204 554</link>',size=9,leading=13,after=9)
left.p('<link href="https://mzs1207.github.io/karolina-prevodi/" color="#244E3C">Karolina Prevodi / '+tr('Website','Sajt')+'</link>',size=9,leading=13,after=4)
left.p('<link href="https://www.linkedin.com/in/karolina-luka%C4%8D-402ba5130/" color="#244E3C">LinkedIn / Karolina Lukač</link>',size=9,leading=13,after=3)
left.section(tr('LANGUAGES'))
left.p(tr('<b>Serbian</b><br/>Native / bilingual proficiency','<b>Srpski</b><br/>Maternji jezik'),size=9,leading=13,after=10)
left.p(tr('<b>English</b><br/>Full professional proficiency','<b>Engleski</b><br/>Puno profesionalno znanje'),size=9,leading=13,after=1)
left.section(tr('AREAS OF WORK'))
for en,sr in [('Literary & publishing','Književnost i izdavaštvo'),('Medicine & pharmacy','Medicina i farmacija'),('Technology & IT','Tehnika i IT'),('Legal & business','Pravo i poslovanje')]:
    left.p(tr(en,sr),size=9,leading=13,after=5)
left.section(tr('CERTIFICATION','SERTIFIKAT'))
left.p('Cambridge English:<br/><b>Advanced (CAE)</b>',size=9,leading=13,after=7)
left.p('Cambridge English<br/>Language Assessment',size=8,leading=11.5,color=MUTED,after=1)
left.section(tr('RESEARCH'))
left.p(tr('The lexical field of verbs of walking in English and their translation into Serbian'),size=8.5,leading=12,after=7)
left.p(tr('Faculty of Philosophy,<br/>University of Novi Sad<br/>2016','Filozofski fakultet,<br/>Univerzitet u Novom Sadu<br/>2016'),size=8,leading=11.5,color=MUTED,after=0)

main=Column(216,H-189,W-254)
main.p(tr('PROFESSIONAL PROFILE'),size=8,leading=10,font='Body-Bold',color=GREEN,after=12)
main.p(tr('Freelance translator working between Serbian and English, with experience across literary, medical, technical and business texts. Focused on preserving meaning and authorial voice, researching specialist terminology and producing clear, natural translations. Interested in project-based and ongoing collaboration with translation agencies.'),size=9.3,leading=13.2,after=0)
main.section(tr('EDUCATION'))
main.p(tr('University of Novi Sad','Univerzitet u Novom Sadu'),font='Body-Bold',size=11,leading=14,after=4)
main.p('2013 - 2015',size=8.5,leading=11,color=OLIVE,after=7)
main.p(tr('Master’s Degree in English Language and Literature','Master studije engleskog jezika i književnosti'),size=9.5,leading=13.5,after=7)
# Grade is an academic achievement, not an invented quality score.
main.p(tr('<b>Grade: 9.43 / 10.00</b>','<b>Prosek: 9,43 / 10,00</b>'),size=9.2,leading=13,color=GREEN,after=0)
main.section(tr('TRANSLATION EXPERIENCE'))
main.p(tr('Freelance Translator | Karolina Prevodi'),font='Body-Bold',size=10,leading=14,after=8)
for txt in [
'Translate between Serbian and English, adapting terminology, tone and style to the subject matter and intended audience.',
'Research terminology and review completed translations for accuracy, consistency and readability.',
'Clarify project scope, deadlines and delivery format directly with clients; handle project materials confidentially.'
]:main.p('• '+tr(txt),size=9,leading=12.6,after=5)
main.section(tr('PROFESSIONAL TRAINING','STRUČNO USAVRŠAVANJE'))
main.p('Ciklopea Summer School',font='Body-Bold',size=10.3,leading=14,after=3)
main.p(tr('Translation & localization / 2017','Prevođenje i lokalizacija / 2017'),size=8.5,leading=11,color=OLIVE,after=7)
main.p(tr('Two-week translation and localization programme covering the language industry, business communication, translation under mentorship, and CAT and quality-assurance workshops. Training included Trados, Across and Verifika.'),size=9,leading=12.6,after=13)
assert main.y >= 119, f'Training overlap: {main.y}'
main.y = 119
main.p(tr('Association of Scientific and Technical Translators of Serbia','Udruženje naučnih i stručnih prevodilaca Srbije'),font='Body-Bold',size=10,leading=13.5,after=3)
main.p(tr('Translation & interpreting / 2016 - 2017','Usmeno i pisano prevođenje / 2016 - 2017'),size=8.5,leading=11,color=OLIVE,after=7)
main.p(tr('Translation and interpreting courses: translation theory, socio-political systems, economics, electrical, mechanical and civil engineering, and legal terminology.'),size=9,leading=12.6,after=0)
assert min(left.y,main.y)>55,f'Content exceeds page margin: left={left.y:.1f}, main={main.y:.1f}'
line(38,32,W-38,32,color='#BECAB5')
para('KAROLINA LUKAČ',38,23,230,size=7,leading=9,font='Body-Bold',color=OLIVE)
para(tr('CURRICULUM VITAE / EN','RADNA BIOGRAFIJA / SR'),W-181,23,150,size=7,leading=9,color=MUTED)
c.save()
print(f'{OUT}\nOne A4 page. Column bottom: {left.y:.1f} / {main.y:.1f} pt.')
