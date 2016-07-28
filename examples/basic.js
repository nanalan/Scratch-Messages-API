getMessages({}, function(err, messages) {
  if(err) err.call()
    
  var message
  for(var i = 0; i < messages.length; i++) {
    message = messages[i]
    console.log('On ' + message.date.toString() + ': ' + message.toString())
  }
})