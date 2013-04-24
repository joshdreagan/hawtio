module Camel {
  export var jmsHeaderSchema = {
    definitions: {
      headers: {
        properties: {
          JMSCorrelationID: {
            type: "java.lang.String"
          },
          JMSDeliveryMode: {
            "type": "string",
            "enum": [
              "PERSISTENT",
              "NON_PERSISTENT"
            ]
          },
          JMSDestination: {
            type: "javax.jms.Destination"
          },
          JMSExpiration: {
            type: "long"
          },
          JMSPriority: {
            type: "int"
          },
          JMSReplyTo: {
            type: "javax.jms.Destination"
          },
          JMSType: {
            type: "java.lang.String"
          },
          JMSXGroupId: {
            type: "java.lang.String"
          }
        }
      },
      "javax.jms.Destination": {
        type: "java.lang.String"
      }
    }
  };
}
