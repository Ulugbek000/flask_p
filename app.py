from flask import Flask, render_template, request

app = Flask(__name__)


data =[ {'name' : 'byd 2022',
     'description': "Lorem ipsum dolor sit amet"
     },
     {'name' : "matiz 2022", "description": "Eng zor car"},
     {'name' : 'spark 1922', "description": "Small and affordable one"},
          {'name' : 'toyota rav4 2022', "description": "Nigga"},
     {'name' : 'audi r8 spyder', "description": "Audi"},
          {'name' : 'li xing', "description": "Some chinese stuff"},
               {'name' : 'Maluba 2022', "description": "Tvar"},
     {'name' : 'tico 2022', "description": "Tiny"},
          {'name' : 'bmw', "description": "Totoy"},

]


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/search')
def search():
    s = request.args['s']

    # for k in data:
        # if s.lower() in k['name']:
    filtered_data = [k for k in data if s in k['name'].lower()]
    return render_template('search.html', s=s, data=filtered_data)
    
    



if __name__ == "__main__":
    app.run(debug=True)

