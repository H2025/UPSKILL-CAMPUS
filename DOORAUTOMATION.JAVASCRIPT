[
    {
        "id": "1",
        "type": "rpi-gpio in",
        "z": "flowID",
        "name": "Proximity Sensor",
        "pin": "GPIO17",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "x": 170,
        "y": 180,
        "wires": [
            ["2"]
        ]
    },
    {
        "id": "2",
        "type": "function",
        "z": "flowID",
        "name": "Door Control",
        "func": "if (msg.payload == 1) {\n    msg.payload = \"OPEN\";\n} else {\n    msg.payload = \"CLOSE\";\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 400,
        "y": 180,
        "wires": [
            ["3"]
        ]
    },
    {
        "id": "3",
        "type": "rpi-gpio out",
        "z": "flowID",
        "name": "Servo Motor",
        "pin": "GPIO18",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "pwm",
        "x": 640,
        "y": 180,
        "wires": []
    }
]
