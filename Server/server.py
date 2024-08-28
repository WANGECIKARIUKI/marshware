from flask import Flask




app = Flask(__name__)

#Contacts API Route

@app.route('/contacts')
def contacts():
    return{"contacts": ["contact1", "contact2", "contact3"]}




#to run the application
if __name__ == '__main__':
    app.run(debug = True)