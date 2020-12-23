//
{/* <Script type="text/javascript" /> */}
// in this kind of script, as the browser is parsing the html script and it encounter the js file and then it first fetch the file the render the file and then continue to  pare the html script again

{/* <Script async  type="text/javascript" /> */}
// in this kind of script, as the browser  is  parsing the html script and it encounter the js file and then it asynchronously fetches the js file(note : the js file is fetched in async way) and then it stop the html parsing and execute the js file and then continue html parsing


{/* <Script defer type="text/javascript" /> */}
// in this kind of script, as the browser  is  parsing the html script and it encounter the js file and then it asynchronously fetches the js file(note : the js file is fetched in async way) and then after the completion of the html parsing it execute the js file
//  if the script is dependent on each other and need to be executed in a single order and then defer is best . if the script like google analytics(modular scripts ) , etc are executed then go with async