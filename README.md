# babel-plugin-import-customization
plugin that provide ability to customize imported file by file name suffix, this plugin can be also used for React-Native.
This plugins allows you to create application and decide in build time which code will be taken based on suffix of file name.
This give you to abillity reuse code and build multiple application(white label) in the same build.


# usage in .babelrc
```javascript
  "plugins": [["import-customization", {"suffix": ["myCustomization"]}]]
```  

# assuming we have the current structure

## Original Component
```javascript
  someComponent.js

  export default class SomeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Hello I am Some Component;
        </Text>
      </View>
    );
  }
```  
## Component Customization
```javascript
   someComponent.myCustomization.js
  // you can inject the original component to custom component in order to extend or do a composition
  import SomeComponent from './someComponent';
  export default class MyCustomComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
             Hello I am Some Custom Component;
        </Text>
          <SomeComponent />
      </View>
    );
  }
}
```

## Application 
```javascript
  import SomeComponent from './someComponent';
  render() {
    return (
      <SomeComponent />
    );
  }
}

// without plugin usage result:
// Hello I am Some Component;

// without plugin usage result:
// Hello I am Some Custom Component
// Hello I am Some Component;

```

## File suffix configuration
```javascript
    // possible to provide suffix to babel plugin options
    "plugins": [["import-customization", {"suffix": ["myCustomization"]}]]
      
    // possible to provide env key of process.env and then set the suffix in node env process.env.suffixName=myCustomization
    // this configration take precedence over the one above.
    "plugins": [["import-customization", {"env": "suffixName"}]] 
    
```


## Note
I gave react example but this plugin can be used for any javascipt code which uses babel.
This also support if you did require and not import




