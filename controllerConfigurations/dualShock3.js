var conrollerConfiguration = { 
	"analogsPresent" : true,
	"leftAnalogY" : 7,
	"leftAnalogX" : 6,
	"rightAnalogY" : 8,
	"rightAnalogX" : 9,
	"buttonBlockTwo" : 2,
	"buttonBlockOne" : 3,
	"vendorId" : 1356,
	"productId" : 616,
	"buttons" : {
		"l2": {
			"buttonBlock": 3,
			"buttonValue": 0x01,
			"analogPin" : 18
		},
		"r2":{
			"buttonBlock": 3,
			"buttonValue": 0x02,
			"analogPin" : 19
		},
		"l1":{
			"buttonBlock": 3,
			"buttonValue": 0x04,
			"analogPin" : 20
		},
		"r1":{
			"buttonBlock": 3,
			"buttonValue": 0x08,
			"analogPin" : 21
		},
		"triangle":{
			"buttonBlock": 3,
			"buttonValue": 0x10,
			"analogPin" : 22
		},
		"circle":{
			"buttonBlock": 3,
			"buttonValue": 0x20,
			"analogPin" : 23
		},
		"x":{
			"buttonBlock": 3,
			"buttonValue": 0x40,
			"analogPin" : 24
		},
		"square":{
			"buttonBlock": 3,
			"buttonValue": 0x80,
			"analogPin": 25

		},
		"select":{
			"buttonBlock": 2,
			"buttonValue": 0x1
		},
		"leftAnalogBump":{
			"buttonBlock": 2,
			"buttonValue": 0x2
		},
		"rightAnalogBump":{
			"buttonBlock": 2,
			"buttonValue": 0x4
		},
		"start":{
			"buttonBlock": 2,
			"buttonValue": 0x08
		},
		"dpadUp":{
			"buttonBlock": 2,
			"buttonValue": 0x10,
			"analogPin": 14
		},
		"dpadRight":{
			"buttonBlock": 2,
			"buttonValue": 0x20,
			"analogPin": 15
		},
		"dpadDown" : {
			"buttonBlock": 2,
			"buttonValue" : 0x40,
			"analogPin" : 16
		},
		"dpadLeft":{	
			"buttonBlock": 2,
			"buttonValue": 0x80,
			"analogPin": 17
		},
		"psxButton":{
			"buttonBlock":4,
			"buttonValue": 0x01
		}
	}
}
module.exports = conrollerConfiguration;
