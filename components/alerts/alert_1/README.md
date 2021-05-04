# Alert - Style 1
This *Alerts* offers four levels of severity with differents icons and colors.

## Examples
![Alert Danger](screenshots/alert_1_danger.png)
![Alert Warning](screenshots/alert_1_warning.png)
![Alert Info](screenshots/alert_1_info.png)
![Alert Success](screenshots/alert_1_success.png)


## Technologies
* HTML
* Vanilla JavaScript
* CSS3
* Font Awesome


## Dependecies
This components uses _Font Awesome_ for the icons. You can download or use the CDN link.

No _JavaScript_ or _CSS_ framework were used in this component.

## Installation

Copy and Paste the code on the [HTML](alert_1.html), [CSS](alert_1.css) and [JavaScript](alert_1.js) file to your project or download the project.

## Usage

To trigger the alert just call the JavaScript function `showAlert(type, title, message)`

### Displaying the alert

To trigger the alert use the function `showAlert(type, title, message)`

* *Type*: Indicates which type of alert, and that will define the color and the icon of the alert
    * *Values*: _danger, warning, info or success_
* *Title*: Indicates the title of the alert
* *Message*: Indicates the message the alert is suppost to send to the user


### Closing the alert

The alert will automatically close after 5 seconds

If you which to close the alert dynamically, you can do so by calling the following _JavaScript_ function: `closeAlert()`

## License
The Guess My Number is an open-source project license under the [MIT license](license)

