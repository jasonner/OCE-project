function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}
var sampleJson = {
	"label": "liver_trans",
	"screens": [{
		"name": "p_7615a7a5_1dc7_4d32_8436_400e57f409ec",
		"label": "Page 1",
		"fields": [{
			"answer": "",
			"dataType": "String",
			"name": "q_9c612b63_7f72_4788_a91f_9d71cc1049a8",
			"isRequired": false,
			"choiceReferences": ["c_d0ff338f_c7b9_4bf4_b644_40f48ee36f0f", "c_f57d720d_ad24_4389_9c8a_f390f6fb326c",
				"c_1d9f0724_89cf_4c30_8a89_acb073116dc6", "c_a25a8be8_9c21_4a97_a8f0_7b4a9f55a716"
			],
			"fieldType": "MultiSelectCheckboxes",
			"fieldText": "1例肝移植等待期患者，乙型肝炎20年、终末期肝硬化、肝腹水,合并低白蛋白血症。您认为应在围手术期的哪些阶段使用人血白蛋白？（不定项选择题）"
		}],
		"connector": {
			"targetReference": "p_7f2a6199_cf9c_417d_ae3e_5cc1df656a07"
		}
	}, {
		"fields": [{
			"fieldText": "您认为使用密闭输液系统是否有助于降低导管相关血流感染？（单选）",
			"dataType": "String",
			"choiceReferences": ["c_98d588d8_74cd_4536_8055_3fd961ab4376", "c_944e5f57_6aa2_4c40_ab26_7a7fd7e67eee"],
			"name": "q_94120d68_8c3f_409d_914d_2c7ba9cd7f63",
			"isRequired": false,
			"fieldType": "MultiSelectCheckboxes",
			"answer": ""
		}],
		"label": "Page 2",
		"name": "p_7f2a6199_cf9c_417d_ae3e_5cc1df656a07",
		"connector": {
			"targetReference": "p_6db0814e_3e4a_400d_96b9_53311fa483f4"
		}
	}, {
		"label": "Page 3",
		"name": "p_6db0814e_3e4a_400d_96b9_53311fa483f4",
		"fields": [{
			"name": "q_fcbd8f09_2875_4290_9229_4c9fc42b6aef",
			"choiceReferences": ["c_2c19aa59_a241_4dbb_a0b1_3643fa00d64a", "c_a63e0e00_ff85_4af1_9952_eecb9d14a935",
				"c_641bfc13_b4ab_420b_a736_0f5761a5163a", "c_1806612d_0387_4a97_82f9_1fcec3e00441"
			],
			"dataType": "String",
			"fieldType": "MultiSelectCheckboxes",
			"fieldText": "医生观念定义",
			"isRequired": false,
			"answer": ""
		}],
		"connector": {
			"targetReference": null
		}
	}, {
		"label": "Welcome Page",
		"fields": [{
			"isRequired": true,
			"name": "welcome_question",
			"fieldType": "ComponentInstance"
		}],
		"connector": {
			"targetReference": "p_7615a7a5_1dc7_4d32_8436_400e57f409ec"
		},
		"name": "welcome_page"
	}],
	"startElementReference": "welcome_page",
	"fullName": "liver_trans-1",
	"choices": [{
		"choiceText": "D.新秀",
		"name": "c_1806612d_0387_4a97_82f9_1fcec3e00441",
		"dataType": "String",
		"value": {
			"stringValue": "D.新秀"
		}
	}, {
		"dataType": "String",
		"value": {
			"stringValue": "C.术后使用"
		},
		"choiceText": "C.术后使用",
		"name": "c_1d9f0724_89cf_4c30_8a89_acb073116dc6"
	}, {
		"value": {
			"stringValue": "A.宗师"
		},
		"dataType": "String",
		"choiceText": "A.宗师",
		"name": "c_2c19aa59_a241_4dbb_a0b1_3643fa00d64a"
	}, {
		"dataType": "String",
		"value": {
			"stringValue": "C.掌门"
		},
		"name": "c_641bfc13_b4ab_420b_a736_0f5761a5163a",
		"choiceText": "C.掌门"
	}, {
		"dataType": "String",
		"value": {
			"stringValue": "B.否"
		},
		"name": "c_944e5f57_6aa2_4c40_ab26_7a7fd7e67eee",
		"choiceText": "B.否"
	}, {
		"name": "c_98d588d8_74cd_4536_8055_3fd961ab4376",
		"dataType": "String",
		"choiceText": "A.是",
		"value": {
			"stringValue": "A.是"
		}
	}, {
		"value": {
			"stringValue": "D.不使用人血白蛋白"
		},
		"name": "c_a25a8be8_9c21_4a97_a8f0_7b4a9f55a716",
		"choiceText": "D.不使用人血白蛋白",
		"dataType": "String"
	}, {
		"name": "c_a63e0e00_ff85_4af1_9952_eecb9d14a935",
		"value": {
			"stringValue": "B.大侠"
		},
		"choiceText": "B.大侠",
		"dataType": "String"
	}, {
		"choiceText": "A.术前使用",
		"name": "c_d0ff338f_c7b9_4bf4_b644_40f48ee36f0f",
		"value": {
			"stringValue": "A.术前使用"
		},
		"dataType": "String"
	}, {
		"value": {
			"stringValue": "B.术中使用"
		},
		"dataType": "String",
		"choiceText": "B.术中使用",
		"name": "c_f57d720d_ad24_4389_9c8a_f390f6fb326c"
	}]
}
// console.log(sampleJson)
// CLMPlayer.registerEventListener("returntocallbuttonpress", function() {
// 	CLMPlayer.getSurveyFlowJsonForCall(sampleJson);
// });

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
