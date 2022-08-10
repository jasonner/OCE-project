function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}
var sampleJson = {
	"fullName": "liver_hepa-1",
	"screens": [{
		"connector": {
			"targetReference": "p_df6ffefb_d578_4775_9c4b_5af968d7fb80"
		},
		"label": "Page 1",
		"fields": [{
			"answer": "",
			"name": "q_aad47dfd_6e6f_4859_bbff_5dc0c45cd73f",
			"dataType": "String",
			"fieldType": "MultiSelectCheckboxes",
			"fieldText": " 1例肝切除等待期患者，原发性肝癌、合并低白蛋白血症。您认为应在围手术期的哪些阶段使用人血白蛋白？（不定项选择题） ",
			"isRequired": false,
			"choiceReferences": ["c_9e5c416b_751c_4d4f_9b27_e6382964030a", "c_568e0b32_a428_4451_b3cf_87a6967059b0",
				"c_6394421a_6c86_4ccf_af4a_0885c779e478", "c_834bc346_3210_496b_b7d9_3a29cfed0123"
			]
		}],
		"name": "p_e2ce8fad_d03a_4521_b57f_fd936eb16f1f"
	},{
		"connector": {
			"targetReference": "p_0cb5298b_7ffd_4bb1_af8f_2ee179ff9c88"
		},
		"label": "Page 2",
		"fields": [{
			"answer": "",
			"fieldText": " 您认为使用密闭输液系统是否有助于降低导管相关血流感染？（单选） ",
			"name": "q_8c681826_4564_4830_b56c_d6a947624cbb",
			"isRequired": false,
			"fieldType": "MultiSelectCheckboxes",
			"dataType": "String",
			"choiceReferences": ["c_0515e452_3e02_44a7_b43f_cd2262413c99", "c_f5e016c4_4c41_4988_abae_fffc16b83b03"]
		}],
		"name": "p_df6ffefb_d578_4775_9c4b_5af968d7fb80"
	},{
		"name": "p_0cb5298b_7ffd_4bb1_af8f_2ee179ff9c88",
		"label": "Page 3",
		"connector": {
			"targetReference": null
		},
		"fields": [{
			"answer": "",
			"dataType": "String",
			"isRequired": false,
			"choiceReferences": ["c_e8faa474_0271_4bf9_a214_0d2f80d81849", "c_1697a08e_9ed3_4c79_be43_a40cc31dbcf9",
				"c_53b6d177_214d_482e_b433_7dccff578318", "c_61ca90cc_eeec_4b0a_9815_ccfbecef3481"
			],
			"name": "q_2d240dab_c3f4_47ef_8318_05a63baff046",
			"fieldType": "MultiSelectCheckboxes",
			"fieldText": " 医生观念定义 "
		}]
	},   {
		"label": "Welcome Page",
		"connector": {
			"targetReference": "p_e2ce8fad_d03a_4521_b57f_fd936eb16f1f"
		},
		"name": "welcome_page",
		"fields": [{
			"name": "welcome_question",
			"fieldType": "ComponentInstance",
			"isRequired": true
		}]
	}],
	"choices": [{
		"name": "c_0515e452_3e02_44a7_b43f_cd2262413c99",
		"value": {
			"stringValue": "A.是"
		},
		"choiceText": "A.是",
		"dataType": "String"
	}, {
		"name": "c_1697a08e_9ed3_4c79_be43_a40cc31dbcf9",
		"value": {
			"stringValue": "B.大侠"
		},
		"dataType": "String",
		"choiceText": "B.大侠"
	}, {
		"dataType": "String",
		"name": "c_53b6d177_214d_482e_b433_7dccff578318",
		"choiceText": "C.掌门",
		"value": {
			"stringValue": "C.掌门"
		}
	}, {
		"choiceText": "B.术中使用",
		"name": "c_568e0b32_a428_4451_b3cf_87a6967059b0",
		"dataType": "String",
		"value": {
			"stringValue": "B.术中使用"
		}
	}, {
		"name": "c_61ca90cc_eeec_4b0a_9815_ccfbecef3481",
		"value": {
			"stringValue": "D.新秀"
		},
		"dataType": "String",
		"choiceText": "D.新秀"
	}, {
		"name": "c_6394421a_6c86_4ccf_af4a_0885c779e478",
		"choiceText": "C.术后使用",
		"dataType": "String",
		"value": {
			"stringValue": "C.术后使用"
		}
	}, {
		"name": "c_834bc346_3210_496b_b7d9_3a29cfed0123",
		"choiceText": "D.不使用人血白蛋白",
		"value": {
			"stringValue": "D.不使用人血白蛋白"
		},
		"dataType": "String"
	}, {
		"name": "c_9e5c416b_751c_4d4f_9b27_e6382964030a",
		"choiceText": "A.术前使用",
		"value": {
			"stringValue": "A.术前使用"
		},
		"dataType": "String"
	}, {
		"choiceText": "A.宗师",
		"name": "c_e8faa474_0271_4bf9_a214_0d2f80d81849",
		"dataType": "String",
		"value": {
			"stringValue": "A.宗师"
		}
	}, {
		"choiceText": "B.否",
		"name": "c_f5e016c4_4c41_4988_abae_fffc16b83b03",
		"dataType": "String",
		"value": {
			"stringValue": "B.否"
		}
	}],
	"label": "liver_hepa",
	"startElementReference": "welcome_page"
}
// console.log(sampleJson)
CLMPlayer.registerEventListener("returntocallbuttonpress", function() {
	CLMPlayer.getSurveyFlowJsonForCall(sampleJson);
});

function domlist(str, Multi) {
	// console.log(sampleJson.screens[str].fields[0].fieldType)
	// console.log(sampleJson.screens[str].fields[0].fieldtext)
	for (let i = 0; i < sampleJson.screens[str].fields[0].choiceReferences.length; i++) {
		for (let j = 0; j < sampleJson.choices.length; j++) {
			//题型
			// console.log(sampleJson.screens[str].fields[0].fieldtype)
			if (Multi == "D") {
				//多选
				if (sampleJson.screens[str].fields[0].choiceReferences[i] == sampleJson.choices[j].name) {
					$("#list").append("<p class='pp'><label><input type='checkbox' value='" + sampleJson.screens[str].fields[0].choiceReferences[
							i] +
						"'  name='" + sampleJson.screens[str].fields[0].name +
						"'/><span style='display: block;width: 3rem;font-weight: 600;'>" +
						sampleJson.choices[
							j].choiceText +
						"</span></label></p>")
					// console.log(sampleJson.choices[j].choiceText)
				}
			} else {
				//单选
				$("#list").css({
					"height": "1.3rem"
				})
				if (sampleJson.screens[str].fields[0].choiceReferences[i] == sampleJson.choices[j].name) {
					$("#list").append("<p class='pp'><label><input type='radio' value='" + sampleJson.screens[str].fields[0].choiceReferences[
							i] +
						"'  name='" + sampleJson.screens[str].fields[0].name +
						"'><span style='display: block;width: 3rem;font-weight: 600;'>" +
						sampleJson.choices[
							j].choiceText +
						"</span></label></p>")
				}
			}
		}
	}
}



// ,f1,f2,f3,f4
function jisuan(AnswerArr, SampleArr, f0) {
	var dengji = 0;
	for (var i = 0; i < AnswerArr.length; i++) {
		for (var j = 0; j < SampleArr.length; j++) {
			if (AnswerArr[i] == SampleArr[j]) {
				if (AnswerArr[i] == f0) {
					return 0;
				} else {
					++dengji;
				}
			}
		}
	}
	return dengji;
}
var isDebug = getQueryString('debug') >= 1;
var layout = {
	initAni: function() {
		var $animates = $('.animated');
		$.each($animates, function(index, el) {
			var delay = $(el).data('delay') || .3;
			var duration = $(el).data('duration');
			$(el).css({
				'-webkit-animation-delay': delay + 's'
			});
			if (duration) {
				$(el).css({
					'-webkit-animation-duration': duration + 's'
				});
			}
		});
	},
	init: function() {
		this.initAni();
		this.bind();
		if (isDebug) {
			$('.layout').addClass('swiper-slide-active');
		} else {
			CLMPlayer.registerEventListener('viewappearing', function() {
				$('.layout').addClass('swiper-slide-active');
			});
			CLMPlayer.registerEventListener('viewdisappearing', function() {
				$('.layout').removeClass('swiper-slide-active');
			})
		}
	},
	disablePageSwipe: function() {
		if (isDebug) {
			return
		}
		CLMPlayer.defineNoSwipeRegion('pageRegion', 0, 0, window.innerWidth, window.innerHeight);
	},
	enablePageSwipe: function() {
		if (isDebug) {
			return
		}
		CLMPlayer.destroyNoSwipeRegion('pageRegion');
	},
	goToSlide: function(slide) {
		this.prevSlide = slide;
		if (isDebug) {
			location.href = slide + '?debug=1';
		} else {
			CLMPlayer.gotoSlide(null, slide);
		}
	},
	goToSequence: function(name) {
		if (isDebug) {
			location.href = '../' + name + '/01_slide.html?debug=1';
		} else {
			CLMPlayer.gotoSlide(name, '01_slide.html', null);
		}
	},
	bind: function() {
		var self = this;
		$(document).on('click', '.J_slide', function(e) {
			var $target = $(e.currentTarget),
				slide = $target.data('slide');
			self.goToSlide(slide);
		}).on('click', '.J_home', function() {
			self.goToSequence('01_sequences');
		})
	}
};
layout.init();
