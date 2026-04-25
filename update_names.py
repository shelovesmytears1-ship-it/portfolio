import sys
with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# RU
text = text.replace('name: "Михаил К.", company: "Строительная фирма"', 'name: "Михаил Ковальчук", company: "Основатель StroyPro"')
text = text.replace('name: "Анна С.", company: "SPA Салон"', 'name: "Анна Соколова", company: "Управляющая Estetica SPA"')
text = text.replace('name: "Томаш В.", company: "Рекламное агентство"', 'name: "Томаш Вишневский", company: "CEO AdCreative"')

# EN
text = text.replace('name: "Michael K.", company: "Construction firm"', 'name: "Michael Kowalczyk", company: "Founder StroyPro"')
text = text.replace('name: "Anna S.", company: "SPA Salon"', 'name: "Anna Sokolowska", company: "Manager Estetica SPA"')
text = text.replace('name: "Thomas W.", company: "Ad Agency"', 'name: "Thomas Wisniewski", company: "CEO AdCreative"')

# PL
text = text.replace('name: "Michal K.", company: "Firma budowlana"', 'name: "Michal Kowalczyk", company: "Founder StroyPro"')
text = text.replace('name: "Anna S.", company: "Salon SPA"', 'name: "Anna Sokolowska", company: "Manager Estetica SPA"')
text = text.replace('name: "Tomasz W.", company: "Agencja reklamowa"', 'name: "Tomasz Wisniewski", company: "CEO AdCreative"')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(text)
print('Names updated successfully')
