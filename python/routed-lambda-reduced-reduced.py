import json

def lambda_handler(event, context):
    return {
            'statusCode': 200,
            'body': json.dumps(dummyData),
            'headers': {
                'Access-Control-Allow-Origin': '*',  # Replace with your allowed origins if needed
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,GET,POST',  # Adjust the methods as needed
            },
        }


dummyData = [
    {
        "eircode": "D02DX35",
        "rating": "4.0",
        "reviewCount": "6",
        "commentCount": "10",
        "address": "66 Democrat spider burn-out murder sari crescent, Apartment 25"
    },
    {
        "eircode": "D01UG71",
        "rating": "1.8",
        "reviewCount": "3",
        "commentCount": "2",
        "address": "139 Jealousy ramie payment detector buffer app drive, Apartment 28"
    },
    {
        "eircode": "D03EM27",
        "rating": "2.7",
        "reviewCount": "8",
        "commentCount": "9",
        "address": "31 Schedule pomelo avenue, Apartment 33"
    }
]