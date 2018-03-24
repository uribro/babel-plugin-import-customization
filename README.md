# babel-plugin-import-customization
This plugin provides the ability to customize importing files by file name suffix, this plugin can also be used for React-Native.  
This plugin allows you to create white label applications by allowing you to create a core app with different functionalities\configurations seprarated into dedicated files which will be replaced according to the desired app flavor.  

# usage in .babelrc
Option 1:  
```"plugins": [["import-customization", {"suffix": ["myCustomization"]}]]```  
Option 2:  
```"plugins": [["import-customization", {"env": "suffixName"}]]```

# Example

assuming we have the current structure:
```
src  
  App.js  
  SomeComponent.js  
  SomeComponent.myCustomization.js  
```
### SomeComponent.js - Original Component
```javascript
  export default class SomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Hello I am Some Component
        </Text>
      </View>
    );
  }
```  
### SomeComponent.myCustomization.js - Component Customization
```javascript
  // you can inject the original component to custom component in order to extend or use composition
  import SomeComponent from './SomeComponent';
  export default class MyCustomComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
             Hello I am Some Custom Component and below is the original:
        </Text>
          <SomeComponent />
      </View>
    );
  }
}
```

### App.js - Application 
```javascript
  import SomeComponent from './SomeComponent';
  render() {
    return (
      <SomeComponent />
    );
  }
}
```

**without plugin the result would be:**  
Hello I am Some Component  

**When building with the plugin the result would be:**  
Hello I am Some Custom Component and below is the original:   
Hello I am Some Component  



## File suffix configuration
There are two ways to tell the plugin which fileSuffix to take:  
1. Plugin configuration  
    ```"plugins": [["import-customization", {"suffix": ["myCustomization"]}]]```
   This will hardcode the customization key to "myCustomization".  
2. Dynamically by telling the plugin at what env configuration to examine:  
   this configration take precedence over the one above.  
   ```"plugins": [["import-customization", {"env": "suffixName"}]]```
   This allows you to create env variable named suffixName and it's value will be used by the plugin as the file suffixes to take.  


## Note
I gave react example but this plugin can be used for any javascipt code which uses babel.
This also support if you use require and not import

