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
        self.y-=8 if self.x == 216 else 11
        line(self.x,self.y,self.x+self.width,self.y)
        self.y-=8 if self.x == 216 else 11
        self.p(label,size=8,leading=10,font='Body-Bold',color=GREEN,after=8 if self.x == 216 else 12)

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
left.p(tr('Belgrade, Serbia','Beograd, Srbija'),size=9,leading=13,after=6)
left.p('<link href="mailto:karolinalukac@gmail.com" color="#244E3C">karolinalukac@gmail.com</link>',size=8.5,leading=13,after=5)
left.p('<link href="tel:+381603204554" color="#244E3C">+381 60 3204 554</link>',size=9,leading=13,after=9)
left.p('<link href="https://mzs1207.github.io/karolina-prevodi/" color="#244E3C">Karolina Prevodi / '+tr('Website','Sajt')+'</link>',size=9,leading=13,after=4)
left.p('<link href="https://www.linkedin.com/in/karolina-luka%C4%8D-402ba5130/" color="#244E3C">LinkedIn / Karolina Lukač</link>',size=9,leading=13,after=3)
left.section(tr('LANGUAGES'))
left.p(tr('<b>Serbian</b><br/>Native / bilingual proficiency','<b>Srpski</b><br/>Maternji jezik'),size=9,leading=13,after=10)
left.p(tr('<b>English</b><br/>Full professional proficiency','<b>Engleski</b><br/>Puno profesionalno znanje'),size=9,leading=13,after=8)
left.p(tr('<b>French</b> / Intermediate','<b>Francuski</b> / Srednji nivo'),size=8.5,leading=12,after=1)
left.section(tr('AREAS OF WORK'))
for en,sr in [('Literary & publishing','Književnost i izdavaštvo'),('Medicine & pharmacy','Medicina i farmacija'),('Technology & IT','Tehnika i IT'),('Legal & business','Pravo i poslovanje')]:
    left.p(tr(en,sr),size=9,leading=13,after=5)
left.section(tr('CERTIFICATION','SERTIFIKAT'))
left.p('Cambridge English:<br/><b>Advanced (CAE)</b>',size=9,leading=13,after=7)
left.p('Cambridge English<br/>Language Assessment',size=8,leading=11.5,color=MUTED,after=1)
left.section(tr('PUBLISHED TRANSLATIONS','OBJAVLJENI PREVODI'))
left.p('<b>U tom Somboru Grad u prizmi stoleća</b>',size=8.5,leading=12,after=4)
left.p(tr('Monograph / into English / 2019','Monografija / na engleski / 2019'),size=8,leading=11.5,color=MUTED,after=10)
left.p('<b>Bitka kod Sente: slika slavne istorije</b>',size=8.5,leading=12,after=4)
left.p(tr('Book / into English / 2021','Knjiga / na engleski / 2021'),size=8,leading=11.5,color=MUTED,after=0)

main=Column(216,H-189,W-254)
main.p(tr('PROFESSIONAL PROFILE'),size=8,leading=10,font='Body-Bold',color=GREEN,after=10)
main.p(tr('Serbian-English translator working professionally since 2017. Master’s degree in English Language and Literature, agency experience and published book translations. Translation and proofreading across legal, technical, medical and business fields, supported by terminology research and CAT tools.','Prevodilac za srpski i engleski jezik sa profesionalnim iskustvom od 2017. godine. Završene master studije engleskog jezika i književnosti, rad u agenciji i objavljeni prevodi knjiga. Prevođenje i lektura pravnih, tehničkih, medicinskih i poslovnih tekstova, uz istraživanje terminologije i rad sa CAT alatima.'),size=9.1,leading=12.6,after=0)
# Shared anchors preserve matching section positions in the two languages.
def anchor(y):
    assert main.y >= y, f'Content overlap: {main.y} < {y}'
    main.y=y
anchor(567)
main.section(tr('PROFESSIONAL EXPERIENCE','RADNO ISKUSTVO'))
def role(title,date,description):
    main.p(title,font='Body-Bold',size=10,leading=13,after=3)
    main.p(date,size=8.4,leading=11,color=OLIVE,after=5)
    main.p(description,size=9,leading=12.2,after=10)
role(tr('Owner & Translator | Karolina Prevodi','Vlasnica i prevodilac | Karolina Prevodi'),tr('October 2020 - Present / Belgrade','Oktobar 2020 - danas / Beograd'),tr('Founded a translation business. Translation and proofreading in law, engineering, medicine, finance, ecology and agriculture.','Osnovala prevodilačku agenciju. Prevođenje i lektura u oblastima prava, tehnike, medicine, finansija, ekologije i poljoprivrede.'))
role(tr('In-house Translator | Mediante d.o.o.','Prevodilac u agenciji | Mediante d.o.o.'),tr('September 2020 - October 2020 / Belgrade','Septembar 2020 - oktobar 2020 / Beograd'),tr('Legal, technical and medical translation; editing, proofreading, terminology research and use of translation memories.','Pravni, tehnički i medicinski prevodi; redaktura, lektura, istraživanje terminologije i rad sa prevodilačkim memorijama.'))
role(tr('Freelance Translator','Samostalni prevodilac'),tr('September 2017 - September 2020','Septembar 2017 - septembar 2020'),tr('Translation of legal, technical and medical documents, marketing materials and websites; proofreading manuals and specifications.','Prevođenje pravnih, tehničkih i medicinskih dokumenata, marketinških tekstova i sajtova; lektura uputstava i specifikacija.'))
anchor(330)
main.section(tr('EDUCATION'))
main.p(tr('University of Novi Sad / Faculty of Philosophy','Univerzitet u Novom Sadu / Filozofski fakultet'),font='Body-Bold',size=9.5,leading=13,after=6)
main.p(tr('<b>Master’s Degree in English Language and Literature</b><br/>October 2013 - May 2015 / Grade: <b>9.43/10.00</b>','<b>Master studije engleskog jezika i književnosti</b><br/>Oktobar 2013 - maj 2015 / Prosek: <b>9,43/10,00</b>'),size=9,leading=12.5,after=7)
main.p(tr('<b>Bachelor’s Degree in English Language and Literature</b><br/>October 2009 - September 2013','<b>Osnovne studije engleskog jezika i književnosti</b><br/>Oktobar 2009 - septembar 2013'),size=9,leading=12.5,after=0)
anchor(215)
main.section(tr('PROFESSIONAL TRAINING','STRUČNO USAVRŠAVANJE'))
main.p('Ciklopea Summer School',font='Body-Bold',size=9.5,leading=13,after=3)
main.p(tr('August - September 2017 / Two-week programme','Avgust - septembar 2017 / Dvonedeljna obuka'),size=8.2,leading=11,color=OLIVE,after=5)
main.p(tr('Translation and localization, mentored practice, business communication, CAT and QA workshops: Trados, Across, Verifika.','Prevođenje i lokalizacija, mentorski rad, poslovna komunikacija, CAT i QA radionice: Trados, Across, Verifika.'),size=8.8,leading=12,after=9)
main.p(tr('Association of Scientific and Technical Translators of Serbia','Udruženje naučnih i stručnih prevodilaca Srbije'),font='Body-Bold',size=9.1,leading=12,after=3)
main.p(tr('October 2016 - June 2017 / Annual seminar','Oktobar 2016 - jun 2017 / Godišnji seminar'),size=8.2,leading=11,color=OLIVE,after=5)
main.p(tr('Translation theory, socio-political systems, economics, electrical, mechanical and civil engineering, and legal terminology.','Teorija prevođenja, društveno-politički sistemi, ekonomija, elektrotehnika, mašinstvo, građevinarstvo i pravna terminologija.'),size=8.8,leading=12,after=0)
assert min(left.y,main.y)>55,f'Content exceeds page margin: left={left.y:.1f}, main={main.y:.1f}'
line(38,32,W-38,32,color='#BECAB5')
para('KAROLINA LUKAČ',38,23,230,size=7,leading=9,font='Body-Bold',color=OLIVE)
para(tr('CURRICULUM VITAE / EN','RADNA BIOGRAFIJA / SR'),W-181,23,150,size=7,leading=9,color=MUTED)
c.save()
print(f'{OUT}\nOne A4 page. Column bottom: {left.y:.1f} / {main.y:.1f} pt.')
