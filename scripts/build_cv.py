"""Build the agency CV. Requires reportlab; CV_FONT_DIR may override Arial fonts."""
import os
import argparse
import json
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
SR = json.loads((ROOT / 'scripts/cv_sr.json').read_text()) if LANG == 'sr' else {}
FONT = Path(os.environ.get('CV_FONT_DIR', '/System/Library/Fonts/Supplemental'))
for name, file in [('ArialCV', 'Arial.ttf'), ('ArialCV-Bold', 'Arial Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONT / file)))
pdfmetrics.registerFontFamily('ArialCV', normal='ArialCV', bold='ArialCV-Bold')
OUT = ROOT / f'output/pdf/Karolina-Lukac-Translator-CV-{LANG.upper()}.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUT), pagesize=A4)
c.setTitle('Karolina Lukač | Prevodilac za srpski i engleski | CV' if LANG == 'sr' else 'Karolina Lukač | Serbian-English Translator | CV')
c.setAuthor('Karolina Lukač')
c.setSubject('Prevodilačke usluge - saradnja sa agencijama' if LANG == 'sr' else 'Freelance translation - agency collaboration')
W, H = A4
left, width = 46, W - 92
y = H - 48
ink, green, muted = '#24372F', '#244E3C', '#58645D'

def paragraph(text, size=9.6, leading=14, color=ink, bold=False, after=7):
    global y
    if LANG == 'sr':
        prefix = '• ' if text.startswith('• ') else ''
        source = text[len(prefix):]
        text = prefix + SR.get(source, source)
        if text.startswith('Serbia &nbsp;'):
            text = text.replace('Serbia', 'Srbija', 1)
    p = Paragraph(text, ParagraphStyle('cv', fontName='ArialCV-Bold' if bold else 'ArialCV', fontSize=size, leading=leading, textColor=HexColor(color)))
    _, height = p.wrap(width, H)
    p.drawOn(c, left, y-height)
    y -= height + after

def section(title):
    global y
    y -= 4
    c.setStrokeColor(HexColor('#D6DED4'))
    c.setLineWidth(.6)
    c.line(left, y, W-left, y)
    y -= 10
    paragraph(title, size=8.3, leading=10, color=green, bold=True, after=4)

paragraph('KAROLINA LUKAČ', size=28, leading=33, color=green, bold=True, after=8)
paragraph('FREELANCE TRANSLATOR  |  SERBIAN &amp; ENGLISH', size=10.2, leading=14, color=green, bold=True, after=11)
paragraph('Serbia &nbsp; | &nbsp; <link href="mailto:karolinalukac@gmail.com" color="#244E3C">karolinalukac@gmail.com</link> &nbsp; | &nbsp; <link href="tel:+381603204554" color="#244E3C">+381 60 3204 554</link>',size=9,leading=13,after=3)
paragraph('<link href="https://mzs1207.github.io/karolina-prevodi/" color="#244E3C">mzs1207.github.io/karolina-prevodi</link> &nbsp; | &nbsp; <link href="https://www.linkedin.com/in/karolina-luka%C4%8D-402ba5130/" color="#244E3C">LinkedIn: Karolina Lukač</link>',size=9,leading=13,after=8)
section('PROFESSIONAL PROFILE')
paragraph('Freelance translator working between Serbian and English, with experience across literary, medical, technical and business texts. Focused on preserving meaning and authorial voice, researching specialist terminology and producing clear, natural translations. Interested in project-based and ongoing collaboration with translation agencies.')
section('EDUCATION')
paragraph('University of Novi Sad | 2013 - 2015',size=10,leading=13,bold=True,after=3)
paragraph('Master’s Degree in English Language and Literature | Grade: 9.43/10.00',size=9.4,leading=13,after=4)
section('TRANSLATION EXPERIENCE')
paragraph('Freelance Translator | Karolina Prevodi',size=10.5,leading=14,bold=True,after=6)
for txt in [
'Translate between Serbian and English, adapting terminology, tone and style to the subject matter and intended audience.',
'Research terminology and review completed translations for accuracy, consistency and readability.',
'Clarify project scope, deadlines and delivery format directly with clients; handle project materials confidentially.'
]: paragraph('• '+txt,size=9.5,leading=13.4,after=4)
section('AREAS OF WORK')
paragraph('<b>Literary:</b> fiction, non-fiction and prose.<br/><b>Medical &amp; pharmaceutical:</b> medical documentation and pharmaceutical materials.<br/><b>Technical &amp; IT:</b> manuals, software documentation and engineering texts.<br/><b>Legal &amp; business:</b> contracts, business documents and academic texts.',size=9.5,leading=15,after=5)
section('PROFESSIONAL TRAINING & CERTIFICATION')
paragraph('Ciklopea Summer School | 2017',size=10,leading=13,bold=True,after=4)
paragraph('Two-week translation and localization programme covering the language industry, business communication, translation under mentorship, and CAT and quality-assurance workshops. Training included Trados, Across and Verifika.',size=9.4,leading=13.3,after=9)
paragraph('Association of Scientific and Technical Translators of Serbia | 2016 - 2017',size=9.6,leading=13,bold=True,after=3)
paragraph('Translation and interpreting courses: translation theory, socio-political systems, economics, electrical, mechanical and civil engineering, and legal terminology.',size=9.4,leading=13.3,after=8)
paragraph('Cambridge English: Advanced (CAE)',size=10,leading=13,bold=True,after=3)
paragraph('Cambridge English Language Assessment',size=9.4,leading=13,color=muted,after=4)
section('LANGUAGES')
paragraph('<b>Serbian:</b> native / bilingual proficiency &nbsp; | &nbsp; <b>English:</b> full professional proficiency',size=9.4,leading=14,after=4)
section('RESEARCH')
paragraph('The lexical field of verbs of walking in English and their translation into Serbian',size=9.6,leading=13.4,bold=True,after=4)
paragraph('Faculty of Philosophy, University of Novi Sad | 2016',size=9.2,leading=13,color=muted,after=4)
assert y > 48, f'Content exceeds page margin: {y}'
c.setStrokeColor(HexColor('#244E3C')); c.setLineWidth(2);c.line(left,31,W-left,31)
c.save()
print(f'{OUT}\nContent ends at {y:.1f}pt; single A4 page.')
