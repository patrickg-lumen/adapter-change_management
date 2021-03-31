getRecord(callback) {
/**
* Write the body for this function.
* The function is a wrapper for this.connector's get() method.
* Note how the object was instantiated in the constructor().
* get() takes a callback function.
*/
this.connector.get((data,error)=> {
if(error){
callback(data,error);
} else {
console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`);
log.info('Info log:\n${JSON.stringify(data)}');
if (data.hasOwnProperty('body')) {
var outObject = [];
var parsedArray = (JSON.parse(data.body));
//parsedArray = renameKey(parsedArray,'number','change_ticket_number');
//parsedArray = renameKey(parsedArray,'sys_id','change_ticket_key');
var num_results = parsedArray.result.length;
//stepping through array
for(var i = 0; i < num_results; i += 1) {
var singleArray = (JSON.parse(data.body).result);
outObject.push({"change_ticket_number" : singleArray[i].number, "active" : singleArray[i].active, "priority" : singleArray[i].priority,"description" : singleArray[i].description, "work_start" : singleArray[i].work_start, "work_end" : singleArray[i].work_end,"change_ticket_key"
 : singleArray[i].sys_id});
}
callback(outObject,error);
}
}
});
}
/**
* @memberof ServiceNowAdapter
* @method postRecord
* @summary Create ServiceNow Record
* @description Creates a record in ServiceNow.
*
* @param {ServiceNowAdapter~requestCallback} callback - The callback that
* handles the response.
*/
postRecord(callback) {
/**
* Write the body for this function.
* The function is a wrapper for this.connector's post() method.
* Note how the object was instantiated in the constructor().
* post() takes a callback function.
*/
this.connector.post((data,error)=> {
if (error) {
callback(data, error);
} else {
if (data.hasOwnProperty('body')) {
var outObject = {};
var parsedArray = (JSON.parse(data.body).result);
outObject = ({"change_ticket_number" : parsedArray.number, "active" : parsedArray.active, "priority" : parsedArray.priority,"description" : parsedArray.description, "work_start" : parsedArray.work_start, "work_end" : parsedArray.work_end,"change_ticket_key"
 : parsedArray.sys_id});
callback(outObject, error);
}
}
});
}
}