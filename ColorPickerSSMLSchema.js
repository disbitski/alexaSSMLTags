{
    "interactionModel": {
        "languageModel": {
            "invocationName": "SSML color picker",
            "intents": [
                {
                    "name": "MyColorIsIntent",
                    "slots": [
                        {
                            "name": "Color",
                            "type": "LIST_OF_COLORS"
                        }
                    ],
                    "samples": [
                        "my favorite color is {Color}"
                    ]
                },
                {
                    "name": "WhatsMyColorIntent",
                    "slots": [],
                    "samples": [
                        "what's my favorite color",
                        "what is my favorite color",
                        "what's my color",
                        "what is my color",
                        "my color",
                        "my favorite color",
                        "get my color",
                        "get my favorite color",
                        "give me my favorite color",
                        "give me my color",
                        "what my color is",
                        "what my favorite color is",
                        "yes",
                        "yup",
                        "sure",
                        "yes please"
                    ]
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                }
            ],
            "types": [
                {
                    "name": "LIST_OF_COLORS",
                    "values": [
                        {
                            "name": {
                                "value": "red"
                            }
                        },
                        {
                            "name": {
                                "value": "orange"
                            }
                        },
                        {
                            "name": {
                                "value": "green"
                            }
                        },
                        {
                            "name": {
                                "value": "pink"
                            }
                        },
                        {
                            "name": {
                                "value": "maroon"
                            }
                        },
                        {
                            "name": {
                                "value": "turquoise"
                            }
                        },
                        {
                            "name": {
                                "value": "black"
                            }
                        },
                        {
                            "name": {
                                "value": "brown"
                            }
                        },
                        {
                            "name": {
                                "value": "white"
                            }
                        }
                    ]
                }
            ]
        }
    }
}