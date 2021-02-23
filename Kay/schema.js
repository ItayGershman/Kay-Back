const conversationSchema = new mongoSchema({
  name: 'welcoming',
  output_options: ['Hello', 'Hi', 'Hola'],
  receiveIntent: `wit_${this.name}`,
  receive_input: 'User says...',
  actions: [
    {
      title: 'display screen',
      title_id: '1',
      device_name: 'screen no.1',
      device: 'device_id',
    },
  ],
  kay_destination: ['default', 'X', 'Y'], // not required
  children: conversationSchema,
});

const welcoming = new ScreenOrientation({
  name: 'welcoming',
  output_options: ['Hello', 'Hi', 'Hola'],
  receiveIntent: `wit_${this.name}`,
  receive_input: 'User says...',
  actions: [
    {
      title: 'display screen',
      title_id: '1',
      device_name: 'screen no.1',
      device: 'device_id',
    },
  ],
  kay_destination: ['default', 'X', 'Y'], // not required
  children: soldering,
});

const scenario = new Scenario({
  name: 'welcoming',
  output_options: ['Hello', 'Hi', 'Hola'],
  receiveIntent: `wit_${this.name}`,
  receive_input: 'User says...',
  actions: [
    {
      title: 'display screen',
      title_id: '1',
      device_name: 'screen no.1',
      device: 'device_id',
    },
  ],
  kay_destination: ['default', 'X', 'Y'], // not required
  children: conversationSchema,
});


const history = new schema({
    conversation:[
        {
            user_input:'input_text',
            intent:'objectId6.name',
            intent_id: "objectId6.id",
            intent_confidence:'objectId6.confidence',
            entities:{
                entity_name: [
                    {   body: "String",
                        confidence: int,
                        end: int,
                        entities: [],
                        id: "objectId7",
                        name: "String",
                        role: "String",
                        start: int,
                        type: "String",
                        value: "String"},
                   ]
            },
            kay_output:'ObjectId2.output_options'
        }
    ]
})
