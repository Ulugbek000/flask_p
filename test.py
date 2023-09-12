
data =[ {'name' : 'byd 2022',
     'description': "Lorem ipsum dolor sit amet"
     },
     {'name' : "matiz 2022", "description": "Eng zor car"},
     {'name' : 'spark 1922', "description": "1922"}

]
e = input()
for k in data:
    if e.lower() in k['name']:
        print(k['name'])

