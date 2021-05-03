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

Copy and Paste the code on the [HTML](alert_1.html), [CSS](alert_1.css) and [JavaScript](alert_1.css) file to your project or download the project.

## Usage

### HTML
`<div class="alert">`
    `<div class="alert__icon"><i class="fa fa-check"></i></div>`
    `<div class="alert__content">`
        `<div class="alert__title">Alert title</div>`
        `<div class="alert__message">This is the alert message.</div>`
    `</div>`
    `<div class="alert__close"><i class="fa fa-times"></i></div>`
`</div>`
### CSS

To use each one of the four different alert add one of the classes to the alert block

For the different types of alerts you:
* *Danger*: `alert--danger`
* *Warning*: `alert--warning`
* *Info*: `alert--info`
* *Success*: `alert--success`

### JavaScript


#### Displaying the alert

To trigger the alert use the function `showAlert(type, title, message)`

* *Type*: Indicates which type of alert, and that will define the color and the icon of the alert
    * *Values*: _danger, warning, info or success_
* *Title*: Indicates the title of the alert
* *Message*: Indicates the message the alert is suppost to send to the user

This function will add the `alert--show` class to the `alert` block

Will also add the `alert--` the the type of the alert (`danger,success,info, warning`)

##### Closing the alert

The alert will automatically close after 5 seconds

You can change the close time by change the value at the _JavaScript_ file:

`alertIntervalObject = setTimeout(function () { clearAlertClasses(); }, 5000);`

If you which to close the alert dynamically, you can do so by calling the following _JavaScript_ function:

`closeAlert()`


## License
The Guess My Number is an open-source project license under the [MIT license](license)

