import json


event = {
    "headers": {
        "content-length": "17",
        "x-amzn-tls-version": "TLSv1.2",
        "x-forwarded-proto": "https",
        "postman-token": "0fa4401e-d73e-499d-b3c0-294afb47d9be",
        "x-forwarded-port": "443",
        "x-forwarded-for": "89.19.79.72",
        "accept": "*/*",
        "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
        "x-amzn-trace-id": "Root=1-652a7793-749a618c4946f3a053bbba66",
        "host": "3mtfm3nngqn7j2bhj3uw2mprha0lvqov.lambda-url.eu-west-1.on.aws",
        "content-type": "text/plain",
        "accept-encoding": "gzip, deflate, br",
        "user-agent": "PostmanRuntime/7.33.0"
    },
    "isBase64Encoded": False,
    "rawPath": "/property",
    "routeKey": "$default",
    "requestContext": {
        "accountId": "anonymous",
        "timeEpoch": 1697281939693,
        "routeKey": "$default",
        "stage": "$default",
        "domainPrefix": "3mtfm3nngqn7j2bhj3uw2mprha0lvqov",
        "requestId": "0f1742c8-80a0-47ee-9a63-11a1d79e4ec4",
        "domainName": "3mtfm3nngqn7j2bhj3uw2mprha0lvqov.lambda-url.eu-west-1.on.aws",
        "http": {
            "path": "/property",
            "protocol": "HTTP/1.1",
            "method": "GET",
            "sourceIp": "89.19.79.72",
            "userAgent": "PostmanRuntime/7.33.0"
        },
        "time": "14/Oct/2023:11:12:19 +0000",
        "apiId": "3mtfm3nngqn7j2bhj3uw2mprha0lvqov"
    },
    "queryStringParameters": {
        "searchType": "eircode",
        "eircode": "d03vv45"
    },
    "body": "{\n    \"foo\": 99\n}",
    "version": "2.0",
    "rawQueryString": "eircode=D08VW25&searchType=eircode"
}

def lambda_handler(event, context):
    # Extract the HTTP method and request path from the event
    http_method = event['requestContext']['http']['method']
    path = event['requestContext']['http']['path']

    # Define the routes and their corresponding handler functions
    routes = {
        ('GET', '/property'): handle_get_property, # FIXME read up on good restful design. FIXME: read up on aws api design
    }

    # Look up the appropriate handler function based on the method and path
    handler = routes.get((http_method, path))

    if handler is not None:
        # Call the handler function for the matched route
        return handler(event)
    else:
        # If no route matches, return a 405 Method Not Allowed response
        return {
            'statusCode': 405,
            'body': json.dumps({'message': 'Method not allowed'}),
        }


# FIXME: somehow I would really like to get @app.route('/') # Look into https://pypi.org/project/aws-wsgi/ and https://www.cloudtechsimplified.com/run-python-flask-in-aws-lambda/
# FIXME: This is really not ideal. Think about how bpl does it.

def search_by_eircode(event):
    results = []
    eircode = event['queryStringParameters'].get('eircode', None) # FIXME: validation happens else where. Not in the function itself
    if eircode is None:
        return
    eircode = eircode.strip().lower()

    for data in dummyData:
        import re
        if re.match(f'.*{eircode.strip().lower()}.*', data['eircode'].strip().lower()) is not None:
            results.append(data)
    return {
        'statusCode': 200,
        'body': results,
    }

def handle_get_property(event):
    searchType = event['queryStringParameters'].get('searchType', None)
    if searchType is None:
        # FIXME: Log
        return {
            'statusCode': 200,
            'body': [],
        }
    
    if searchType.strip().lower() == 'eircode':
        return search_by_eircode(event)
    elif searchType.strip().lower() == 'all':
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': dummyData
        }
    else:
        # FIXME: Log
        return {
            'statusCode': 200,
            'body': [],
        }
    
    # eircode = event['queryStringParameters']['eircode']
    # if eir

    # for data in dummyData:
    #     if data['eircode'].strip().lower() == eircode.strip().lower():
    #         results.append(data)

    # return {
    #     'statusCode': 200,
    #     'body': results,
    # }

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
    },
    {
        "eircode": "D03GC77",
        "rating": "2.5",
        "reviewCount": "6",
        "commentCount": "4",
        "address": "159 Weeder harp sorbet pastor hate yarmulke street, Apartment 5"
    },
    {
        "eircode": "D01YA49",
        "rating": "3.9",
        "reviewCount": "10",
        "commentCount": "5",
        "address": "143 Espadrille spiderling goddess calculation crescent, Apartment 36"
    },
    {
        "eircode": "D03NR46",
        "rating": "4.6",
        "reviewCount": "8",
        "commentCount": "8",
        "address": "59 Airship drive, Apartment 10"
    },
    {
        "eircode": "D03YB36",
        "rating": "1.7",
        "reviewCount": "4",
        "commentCount": "4",
        "address": "196 Pepper street, Apartment 50"
    },
    {
        "eircode": "D02VM33",
        "rating": "3.2",
        "reviewCount": "1",
        "commentCount": "8",
        "address": "16 Hostel register drive, Apartment 37"
    },
    {
        "eircode": "D03YC66",
        "rating": "4.7",
        "reviewCount": "3",
        "commentCount": "3",
        "address": "162 Incentive community reclamation word gutter infection dickey avenue, Apartment 29"
    },
    {
        "eircode": "D01VW87",
        "rating": "1.5",
        "reviewCount": "10",
        "commentCount": "2",
        "address": "89 Highlight prescription junior incubation patient masonry crescent, Apartment 37"
    },
    {
        "eircode": "D03SL22",
        "rating": "3.3",
        "reviewCount": "4",
        "commentCount": "1",
        "address": "200 Screw drive, Apartment 26"
    },
    {
        "eircode": "D03ZS20",
        "rating": "3.7",
        "reviewCount": "7",
        "commentCount": "3",
        "address": "46 Makeover crescent, Apartment 41"
    },
    {
        "eircode": "D03AS80",
        "rating": "4.9",
        "reviewCount": "3",
        "commentCount": "10",
        "address": "128 Simvastatin street, Apartment 31"
    },
    {
        "eircode": "D02TU87",
        "rating": "3.3",
        "reviewCount": "4",
        "commentCount": "2",
        "address": "186 Dwarf scraper drive, Apartment 16"
    },
    {
        "eircode": "D02VH08",
        "rating": "2.9",
        "reviewCount": "2",
        "commentCount": "3",
        "address": "78 Consistency force maybe mRNA prohibition alert vineyard drive, Apartment 1"
    },
    {
        "eircode": "D02RL28",
        "rating": "3.2",
        "reviewCount": "1",
        "commentCount": "8",
        "address": "4 Fisherman provider dandelion hybridization street, Apartment 13"
    },
    {
        "eircode": "D03TA21",
        "rating": "1.8",
        "reviewCount": "7",
        "commentCount": "10",
        "address": "122 Lieutenant slot revascularization advancement divorce loss avenue, Apartment 25"
    },
    {
        "eircode": "D02PQ39",
        "rating": "3.3",
        "reviewCount": "1",
        "commentCount": "7",
        "address": "16 Earplug impairment elf assertion cruelty gastronomy husband avenue, Apartment 43"
    },
    {
        "eircode": "D02HP78",
        "rating": "3.3",
        "reviewCount": "5",
        "commentCount": "5",
        "address": "54 Economics close, Apartment 28"
    },
    {
        "eircode": "D03BJ66",
        "rating": "3.9",
        "reviewCount": "8",
        "commentCount": "7",
        "address": "81 Clinic court shrine cause dressing high-rise avenue, Apartment 32"
    },
    {
        "eircode": "D03SR33",
        "rating": "0.6",
        "reviewCount": "2",
        "commentCount": "10",
        "address": "69 Tinderbox hesitation general forage shark eclipse nectarine crescent, Apartment 20"
    },
    {
        "eircode": "D01ZQ89",
        "rating": "3.5",
        "reviewCount": "3",
        "commentCount": "1",
        "address": "26 Efficacy assassination shanty functionality rhinoceros litter resistance street, Apartment 11"
    },
    {
        "eircode": "D03IZ06",
        "rating": "4.0",
        "reviewCount": "9",
        "commentCount": "9",
        "address": "60 Curd constant shock crescent, Apartment 35"
    },
    {
        "eircode": "D03VV45",
        "rating": "0.4",
        "reviewCount": "5",
        "commentCount": "4",
        "address": "75 Lemur block visa street, Apartment 50"
    },
    {
        "eircode": "D03VA09",
        "rating": "2.5",
        "reviewCount": "9",
        "commentCount": "1",
        "address": "187 Auto creche plunger sponsorship crescent, Apartment 13"
    }
]



if __name__ == '__main__':
    print(lambda_handler(event, None))



