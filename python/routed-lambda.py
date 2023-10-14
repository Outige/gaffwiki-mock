import json

def lambda_handler(event, context):
    # Extract the HTTP method and request path from the event
    http_method = event['httpMethod']
    path = event['path']

    # Define the routes and their corresponding handler functions
    routes = {
        ('GET', '/config'): handle_get_config,
        ('POST', '/config'): handle_post_config,
        ('POST', '/config/add'): handle_post_add_config,
    }

    # Look up the appropriate handler function based on the method and path
    handler = routes.get((http_method, path))

    if handler is not None:
        # Call the handler function for the matched route
        return handler()
    else:
        # If no route matches, return a 405 Method Not Allowed response
        return {
            'statusCode': 405,
            'body': json.dumps({'message': 'Method not allowed'}),
        }

def handle_get_config():
    # Logic for handling GET /config
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'GET /config handled'}),
    }

def handle_post_config():
    # Logic for handling POST /config
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'POST /config handled'}),
    }

def handle_post_add_config():
    # Logic for handling POST /config/add
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'POST /config/add handled'}),
    }

import json

def lambda_handler(event, context):
    # Extract the HTTP method and request path from the event
    http_method = event['httpMethod']
    path = event['path']

    # Define the routes and their corresponding handler functions
    routes = {
        ('GET', '/config'): handle_get_config,
        ('POST', '/config'): handle_post_config,
        ('POST', '/config/add'): handle_post_add_config,
    }

    # Look up the appropriate handler function based on the method and path
    handler = routes.get((http_method, path))

    if handler is not None:
        # Call the handler function for the matched route
        return handler()
    else:
        # If no route matches, return a 405 Method Not Allowed response
        return {
            'statusCode': 405,
            'body': json.dumps({'message': 'Method not allowed'}),
        }

def handle_get_config():
    # Logic for handling GET /config
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'GET /config handled'}),
    }

def handle_post_config():
    # Logic for handling POST /config
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'POST /config handled'}),
    }

def handle_post_add_config():
    # Logic for handling POST /config/add
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'POST /config/add handled'}),
    }