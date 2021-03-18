// Update this constant with your ServiceNow credentials
// updated with what is needed for Lab3

const options = {
  url: 'https://dev76574.service-now.com/',
  username: 'admin',
  password: 'es5yxH6JzLOD',
  serviceNowTable: 'change_request'
};

    // Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get((data,error) => {
      if (error) {
          console.error('Error from GET: \n {$JSON.stringify(error)}');
      }
      console.log('GET response was: \n ${JSON.stringify(data)}')
  });
  connector.post((data,error) => {
      if (error) {
          console.error('Error from POST: \n {$JSON.stringify(error)}');
      }
      console.log('POST response was: \n ${JSON.stringify(data)}')
  });
}

// Call mainOnObject to run it.
mainOnObject();