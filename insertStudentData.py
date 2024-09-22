import json
import boto3

# create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# use the DynamoDB object to select our table
table = dynamodb.Table('studentprofile')

# define the handler function that the Lambda service will use as an entry point
def lambda_handler(event, context):
# extract values from the event object we got from the Lambda service and store in a variable
    firstname = event['stuFirstName']
    id=event['stuid']
    lastname=event['stuLastName']
    age=event['stuAge']
# write name and time to the DynamoDB table using the object we instantiated and save response in a variable
    response = table.put_item(
        Item={
            'stuid': id,
            'stuAge':age,
            'stuFirstName':firstname,
            'stuLastName':lastname
            })
# return a properly formatted JSON object
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda, ' + firstname)
    }
