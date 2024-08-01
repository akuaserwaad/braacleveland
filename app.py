from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def connect_db():
    return sqlite3.connect('hair_services_booking.db')

@app.route('/users', methods=['GET'])
def get_users():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Users')
    users = cursor.fetchall()
    conn.close()
    return jsonify(users)

@app.route('/appointments', methods=['POST'])
def book_appointment():
    data = request.get_json()
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute(
        'INSERT INTO Appointments (client_id, stylist_id, service_id, appointment_date, status) VALUES (?, ?, ?, ?, ?)',
        (data['client_id'], data['stylist_id'], data['service_id'], data['appointment_date'], 'booked')
    )
    conn.commit()
    conn.close()
    return jsonify({'status': 'appointment booked'}), 201

if __name__ == '__main__':
    app.run(debug=True)
