import requests
from bs4 import BeautifulSoup
import json
url= 'https://agritech.tnau.ac.in/horticulture/horti_TNAU_sale%20price.html'
html = requests.get(url).content
soup = BeautifulSoup(html, 'html.parser')
tables = soup.find_all('table')
table_len=len(tables)
product_data = {}
for i in range(1,table_len):
    if(i==3):
        continue
    else:
        length=len(tables[i].find_all('tr'))
        tableRow=tables[i].find_all('tr')
        for j in range (1,length):
            table_content=tableRow[j].find_all('td')
            if len(table_content) >= 3:
                product_name=table_content[1].text.strip()
                product_price=table_content[2].text.strip()
                product_data[product_name] = product_price

json_file_path = 'product_data.json'

with open(json_file_path, 'w') as json_file:
    json.dump(product_data, json_file, indent=4)
    
print(f"Data saved to {json_file_path}")
           