import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class MultiLineChart extends Component {	
	render() {
		const options = {
				animationEnabled: true,	
				zoomEnabled: true,
				zoomType: "x",
				title:{
					text: "Keywords Sentiment Score Analysis"
				},
				width: 0,
				axisY : {
					title: "Sentiment Score"
				},
				axisX : {
					viewportMaximum: 10
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "line",
					name: "reddit",
					showInLegend: true,
					dataPoints: [
						{
							"label": "Ann Coulter",
							"y": -1.4666666666666666
						},
						{
							"label": "Ronaldo",
							"y": 0.32051282051282054
						},
						{
							"label": "Lions",
							"y": 0.7575442247658689
						},
						{
							"label": "Kittle",
							"y": 1.1080163043478262
						},
						{
							"label": "Jeff Jarrett",
							"y": 0.8764940239043825
						},
						{
							"label": "Mordecai",
							"y": 1.3492063492063493
						},
						{
							"label": " Irsay",
							"y": 1.3333333333333333
						},
						{
							"label": "Ravens",
							"y": null
						},
						{
							"label": "Eagles",
							"y": -0.5
						},
						{
							"label": "Defund NPR",
							"y": -0.3389830508474576
						},
						{
							"label": "Boebert",
							"y": -0.5343511450381679
						},
						{
							"label": "#AEWFullGear",
							"y": -0.025959978366684695
						},
						{
							"label": "Mac Jones",
							"y": -0.5595238095238095
						},
						{
							"label": "Iraq",
							"y": -1.145945945945946
						},
						{
							"label": "Jimbo",
							"y": 0.2076923076923077
						},
						{
							"label": "Pete Davidson",
							"y": 1.0569395017793595
						},
						{
							"label": "Insincere",
							"y": 1.4975247524752475
						},
						{
							"label": "Truth Social",
							"y": 0.9875776397515528
						},
						{
							"label": "Noles",
							"y": -1.1379310344827587
						},
						{
							"label": "Thankful",
							"y": 4.500323206205559
						},
						{
							"label": "Buckeyes",
							"y": 0.5902777777777778
						},
						{
							"label": "Auburn",
							"y": -0.657439446366782
						},
						{
							"label": "Joy Reid",
							"y": -1.0952380952380953
						},
						{
							"label": "#UFC281",
							"y": 1.996309963099631
						},
						{
							"label": "Brian Kelly",
							"y": -0.43389830508474575
						},
						{
							"label": "Dusty Baker",
							"y": 3.0763956904995102
						},
						{
							"label": "Tiffany Cross",
							"y": -0.5905511811023622
						},
						{
							"label": "Nike",
							"y": -0.9501039501039501
						},
						{
							"label": "#RIPJimmyFallon",
							"y": 1.8907103825136613
						},
						{
							"label": "Liz Cheney",
							"y": -0.041666666666666664
						},
						{
							"label": "Sean Taylor",
							"y": null
						},
						{
							"label": "Vindman",
							"y": null
						},
						{
							"label": "Mattress Mack",
							"y": 1.1538461538461537
						},
						{
							"label": "Karen Bass",
							"y": 2.7690582959641254
						},
						{
							"label": "#AEWDynamite",
							"y": 0.4611872146118721
						},
						{
							"label": "Meth",
							"y": 1.1124260355029585
						},
						{
							"label": "#SurvivorSeries",
							"y": 0.4952023362536504
						},
						{
							"label": "Jon Jones",
							"y": 0.5590551181102362
						},
						{
							"label": "Tumblr",
							"y": 1.27007299270073
						},
						{
							"label": "Richard Fierro",
							"y": 1.0775
						},
						{
							"label": "Grover Cleveland",
							"y": 0.78125
						},
						{
							"label": "Justin Jefferson",
							"y": -0.9086538461538461
						},
						{
							"label": "Paul Ryan",
							"y": -1.3576642335766422
						},
						{
							"label": "Powell",
							"y": -0.0341726618705036
						},
						{
							"label": "Migos",
							"y": -3.723018147086915
						},
						{
							"label": "Kyrie",
							"y": -0.08666666666666667
						},
						{
							"label": "NICKI WROTE IT",
							"y": 1.9322033898305084
						},
						{
							"label": "Cenk",
							"y": -1.5874125874125875
						},
						{
							"label": "Namor",
							"y": 0.7131782945736435
						},
						{
							"label": "Hive",
							"y": -5.583333333333333
						},
						{
							"label": "Ohio State",
							"y": 0.5582733812949641
						},
						{
							"label": "Caleb Williams",
							"y": 2.260450160771704
						},
						{
							"label": "Walker",
							"y": 0.2222222222222222
						},
						{
							"label": "Christmas",
							"y": 0.479136690647482
						},
						{
							"label": "Notre Dame",
							"y": 0.6303696303696303
						},
						{
							"label": "Pence",
							"y": 0.575
						},
						{
							"label": "Mick",
							"y": -0.4246243334949103
						},
						{
							"label": "Wizkid",
							"y": 0.189873417721519
						},
						{
							"label": "Sark",
							"y": 1.1428571428571428
						},
						{
							"label": "Jason David Frank",
							"y": -1.0381205673758864
						},
						{
							"label": "Ayton",
							"y": -0.8379373848987108
						},
						{
							"label": "Electron",
							"y": -0.7205882352941176
						},
						{
							"label": "Daniel Radcliffe",
							"y": 1.4727272727272727
						},
						{
							"label": "Heidi Klum",
							"y": 2.0565110565110567
						},
						{
							"label": "Jerry Jones",
							"y": -1.1805555555555556
						},
						{
							"label": "Mastodon",
							"y": 0.4712230215827338
						},
						{
							"label": "Zags",
							"y": 2.0303030303030303
						},
						{
							"label": "Mr. President",
							"y": 3.0342465753424657
						},
						{
							"label": "Thanksgiving",
							"y": 1.1968306922435363
						},
						{
							"label": "Takeoff",
							"y": -3.421551724137931
						},
						{
							"label": "Balenciaga",
							"y": -0.6635071090047393
						},
						{
							"label": "Died Suddenly",
							"y": -0.8103448275862069
						},
						{
							"label": "Manchin",
							"y": 0.47619047619047616
						},
						{
							"label": "Dunkey",
							"y": 1.623076923076923
						},
						{
							"label": "Gonzaga",
							"y": -0.031573217201959713
						},
						{
							"label": "Atlantic Station",
							"y": -5.839080459770115
						},
						{
							"label": "#Warzone2",
							"y": 1.051044083526682
						},
						{
							"label": "Twitter 2.0",
							"y": 0.7954545454545454
						},
						{
							"label": "Fauci",
							"y": 1.7320099255583126
						},
						{
							"label": "Michigan",
							"y": 1.6324786324786325
						},
						{
							"label": "Blake Masters",
							"y": 0.6483790523690773
						},
						{
							"label": "Emoni Bates",
							"y": 0.0967741935483871
						},
						{
							"label": "Mariah Carey",
							"y": 0.9971509971509972
						},
						{
							"label": "Gen Z",
							"y": -0.25396825396825395
						},
						{
							"label": "Point Break",
							"y": -0.3374384236453202
						},
						{
							"label": "Gaming",
							"y": 0.7228260869565217
						},
						{
							"label": "Fuentes",
							"y": -0.3380281690140845
						},
						{
							"label": "Nick Fuentes",
							"y": -1.4386503067484662
						},
						{
							"label": "Bama",
							"y": 0.515
						},
						{
							"label": "Rush Hour",
							"y": 2.8756756756756756
						},
						{
							"label": "Young MA",
							"y": -3.8348214285714284
						},
						{
							"label": "Since Twitter",
							"y": 2.4482758620689653
						},
						{
							"label": "Zanab",
							"y": 1.900709219858156
						},
						{
							"label": "#WakandaForever",
							"y": 0.8719211822660099
						},
						{
							"label": "#GoBlue",
							"y": 1.1519727228446177
						},
						{
							"label": "Irene Cara",
							"y": 2.6682242990654204
						},
						{
							"label": "South Carolina",
							"y": -0.40425531914893614
						},
						{
							"label": "Charlottesville",
							"y": -1.2388059701492538
						},
						{
							"label": "Space Karen",
							"y": 2.256521739130435
						},
						{
							"label": "Veterans Day",
							"y": 1.6818181818181819
						},
						{
							"label": "Kathy Griffin",
							"y": -0.03359173126614987
						},
						{
							"label": "Trent Reznor",
							"y": 0.19488817891373802
						},
						{
							"label": "#thiccsgiving",
							"y": 0.09970089730807577
						},
						{
							"label": "Jarry",
							"y": 0.5215311004784688
						},
						{
							"label": "George Will",
							"y": 1.6731843575418994
						},
						{
							"label": "DeSantis",
							"y": 0.3485148514851485
						},
						{
							"label": "So Twitter",
							"y": -0.07668711656441718
						},
						{
							"label": "University of Virginia",
							"y": -3.0481283422459895
						},
						{
							"label": "Davido",
							"y": -2.4583333333333335
						},
						{
							"label": "Jesse James",
							"y": 3.263157894736842
						},
						{
							"label": "Sarah Logan",
							"y": -0.8870967741935484
						}
					]
				},
				{
					type: "line",
					name: "newsAPI",
					showInLegend: true,
					dataPoints: [
						{
							"label": "Michigan",
							"y": 1.31
						},
						{
							"label": "Blake Masters",
							"y": 0.51
						},
						{
							"label": "Emoni Bates",
							"y": 4.444444444444445
						},
						{
							"label": "Gonzaga",
							"y": 0.3548387096774194
						},
						{
							"label": "Rush Hour",
							"y": 0.11538461538461539
						},
						{
							"label": "#Warzone2",
							"y": 3
						},
						{
							"label": "Twitter 2.0",
							"y": -0.1
						},
						{
							"label": "Died Suddenly",
							"y": -1.3783783783783783
						},
						{
							"label": "Fauci",
							"y": -1.04
						},
						{
							"label": "Atlantic Station",
							"y": -3.408450704225352
						},
						{
							"label": "England",
							"y": 0.45
						},
						{
							"label": "Mr. President",
							"y": -0.23
						},
						{
							"label": "Heidi Klum",
							"y": 1.82
						},
						{
							"label": "Jerry Jones",
							"y": 2
						},
						{
							"label": "Electron",
							"y": 1.2758620689655173
						},
						{
							"label": "Jesse James",
							"y": -0.5454545454545454
						},
						{
							"label": "Sarah Logan",
							"y": 1
						},
						{
							"label": "Ann Coulter",
							"y": 1.25
						},
						{
							"label": "Hooters",
							"y": 3
						},
						{
							"label": "So Twitter",
							"y": -0.44
						},
						{
							"label": "University of Virginia",
							"y": -5.25
						},
						{
							"label": "Trent Reznor",
							"y": 0.25
						},
						{
							"label": "South Carolina",
							"y": -0.23232323232323232
						},
						{
							"label": "Space Karen",
							"y": -0.22580645161290322
						},
						{
							"label": "DeSantis",
							"y": 0.65
						},
						{
							"label": "Jarry",
							"y": 1.4516129032258065
						},
						{
							"label": "#GoBlue",
							"y": 6.865671641791045
						},
						{
							"label": "Irene Cara",
							"y": 3.9166666666666665
						},
						{
							"label": "Nick Fuentes",
							"y": -1.9583333333333333
						},
						{
							"label": "Liz Cheney",
							"y": 0.06
						},
						{
							"label": "#RIPJimmyFallon",
							"y": -0.9090909090909091
						},
						{
							"label": "Nike",
							"y": 2.7
						},
						{
							"label": "#UFC281",
							"y": 0.3333333333333333
						},
						{
							"label": "Thankful",
							"y": 1.7171717171717171
						},
						{
							"label": "Dusty Baker",
							"y": 3.48
						},
						{
							"label": "Eagles",
							"y": 1.57
						},
						{
							"label": "Defund NPR",
							"y": -2
						},
						{
							"label": "Boebert",
							"y": 0.7676767676767676
						},
						{
							"label": "#Andor",
							"y": 0.48
						},
						{
							"label": "Iraq",
							"y": -1.7
						},
						{
							"label": " Irsay",
							"y": -0.325
						},
						{
							"label": "Lions",
							"y": 1.01
						},
						{
							"label": "Mick",
							"y": 0.25
						},
						{
							"label": " Taysom",
							"y": 1.2
						},
						{
							"label": " Don't Worry Darling",
							"y": 4
						},
						{
							"label": "Paul Ryan",
							"y": 0.8351648351648352
						},
						{
							"label": "Ohio State",
							"y": 1.0404040404040404
						},
						{
							"label": "Richard Fierro",
							"y": -2.357142857142857
						},
						{
							"label": "Powell",
							"y": 1.0101010101010102
						},
						{
							"label": "Meth",
							"y": 0.42105263157894735
						},
						{
							"label": "#SurvivorSeries",
							"y": 1.2727272727272727
						},
						{
							"label": "Canelo",
							"y": null
						},
						{
							"label": "Jon Jones",
							"y": 2.3333333333333335
						},
						{
							"label": "Mariah Carey",
							"y": 2.606060606060606
						},
						{
							"label": "Bama",
							"y": 1.25
						},
						{
							"label": "Point Break",
							"y": 0.58
						},
						{
							"label": "Fuentes",
							"y": -0.43434343434343436
						},
						{
							"label": "Ticketmaster",
							"y": 1.5714285714285714
						},
						{
							"label": "Manchin",
							"y": 3.066666666666667
						},
						{
							"label": "Dunkey",
							"y": 11.5
						},
						{
							"label": "Takeoff",
							"y": 0.17346938775510204
						},
						{
							"label": "Balenciaga",
							"y": 0.625
						},
						{
							"label": "Thanksgiving",
							"y": 1.0952380952380953
						},
						{
							"label": "#OWLGrandFinals",
							"y": 4
						},
						{
							"label": "Zags",
							"y": 5.142857142857143
						},
						{
							"label": "Mastodon",
							"y": 0.4365482233502538
						},
						{
							"label": "Jason David Frank",
							"y": 1.903225806451613
						},
						{
							"label": "Black Friday",
							"y": 2.6
						},
						{
							"label": "Davido",
							"y": 1.99
						},
						{
							"label": "Kathy Griffin",
							"y": 0.8173913043478261
						},
						{
							"label": "Jeff Jarrett",
							"y": 1.5894736842105264
						},
						{
							"label": "#thiccsgiving",
							"y": 0
						},
						{
							"label": "Mordecai",
							"y": 4
						},
						{
							"label": "Charlottesville",
							"y": -7.24
						},
						{
							"label": "Veterans Day",
							"y": 2.91
						},
						{
							"label": "George Will",
							"y": -0.03
						},
						{
							"label": "#WakandaForever",
							"y": 2.4
						},
						{
							"label": "Young MA",
							"y": 1.34
						},
						{
							"label": "Since Twitter",
							"y": -0.74
						},
						{
							"label": "Zanab",
							"y": 0.45
						},
						{
							"label": " Andy Dalton",
							"y": 0.72
						},
						{
							"label": "Gen Z",
							"y": 2.12
						},
						{
							"label": "Gaming",
							"y": 1.6224489795918366
						},
						{
							"label": "Tiffany Cross",
							"y": 0.8484848484848485
						},
						{
							"label": "Auburn",
							"y": 2.0555555555555554
						},
						{
							"label": "Joy Reid",
							"y": 0.9090909090909091
						},
						{
							"label": "Truth Social",
							"y": -0.3
						},
						{
							"label": "Noles",
							"y": -0.20408163265306123
						},
						{
							"label": "Buckeyes",
							"y": 0.17307692307692307
						},
						{
							"label": "Apple and Google",
							"y": 2.19
						},
						{
							"label": "Brian Kelly",
							"y": -1.9
						},
						{
							"label": "Jimbo",
							"y": 0.375
						},
						{
							"label": "Pete Davidson",
							"y": 0.5121951219512195
						},
						{
							"label": "#AEWFullGear",
							"y": -0.8888888888888888
						},
						{
							"label": "Sean Taylor",
							"y": 4.6
						},
						{
							"label": "Mac Jones",
							"y": -0.9142857142857143
						},
						{
							"label": "Ravens",
							"y": -0.9574468085106383
						},
						{
							"label": "Ronaldo",
							"y": 0.34
						},
						{
							"label": "Vindman",
							"y": -1
						},
						{
							"label": " Rodney",
							"y": 1.0476190476190477
						},
						{
							"label": "Pence",
							"y": -0.010752688172043012
						},
						{
							"label": "Kittle",
							"y": 1.523076923076923
						},
						{
							"label": "Sark",
							"y": 2.5
						},
						{
							"label": "Wizkid",
							"y": 3.5238095238095237
						},
						{
							"label": "Ayton",
							"y": 0.4146341463414634
						},
						{
							"label": "Daniel Radcliffe",
							"y": 0.04
						},
						{
							"label": "Christmas",
							"y": 1.3875
						},
						{
							"label": "Porsha",
							"y": 0.45454545454545453
						},
						{
							"label": "Notre Dame",
							"y": 1.87
						},
						{
							"label": "Bill and Ted",
							"y": 1.4141414141414141
						},
						{
							"label": "Walker",
							"y": 1.15
						},
						{
							"label": "Caleb Williams",
							"y": 1.7578947368421052
						},
						{
							"label": "Cenk",
							"y": -4
						},
						{
							"label": "Namor",
							"y": 1.3
						},
						{
							"label": "Hive",
							"y": 0.8205128205128205
						},
						{
							"label": "Migos",
							"y": -0.45454545454545453
						},
						{
							"label": "Kyrie",
							"y": 0.66
						},
						{
							"label": "Tumblr",
							"y": -1.896551724137931
						},
						{
							"label": "Grover Cleveland",
							"y": -0.08771929824561403
						},
						{
							"label": "Justin Jefferson",
							"y": 0.8611111111111112
						},
						{
							"label": "Daily Quordle 296",
							"y": 7
						},
						{
							"label": "NICKI WROTE IT",
							"y": 0.9540229885057471
						},
						{
							"label": "Mattress Mack",
							"y": 3.648936170212766
						},
						{
							"label": "Karen Bass",
							"y": 0.7661290322580645
						}
					]
				},
				{
					type: "line",
					name: "twitter",
					showInLegend: true,
					dataPoints: [
						{
							"label": " #Powerball",
							"y": 1.789
						},
						{
							"label": "Tiffany Cross",
							"y": -1.1521667217995368
						},
						{
							"label": "Joy Reid",
							"y": 2.878229974160207
						},
						{
							"label": "Auburn",
							"y": 0.9566903684550744
						},
						{
							"label": "Noles",
							"y": 3.3115707821590172
						},
						{
							"label": "Buckeyes",
							"y": 0.05424604455925089
						},
						{
							"label": "Truth Social",
							"y": 0.0009686793671294801
						},
						{
							"label": "Brian Kelly",
							"y": -0.6934754521963824
						},
						{
							"label": "Jimbo",
							"y": -0.18129770992366412
						},
						{
							"label": "Pete Davidson",
							"y": 0.766121270452358
						},
						{
							"label": "Sean Taylor",
							"y": null
						},
						{
							"label": "Mac Jones",
							"y": -1.9421460892049127
						},
						{
							"label": "#AEWFullGear",
							"y": 2.211376858435682
						},
						{
							"label": " MITB",
							"y": -0.024378585086042064
						},
						{
							"label": " Rodney",
							"y": 0.44133333333333336
						},
						{
							"label": "Kittle",
							"y": 1.1003236245954693
						},
						{
							"label": "Ravens",
							"y": null
						},
						{
							"label": "Ronaldo",
							"y": 0.6359732824427481
						},
						{
							"label": "Ayton",
							"y": -0.8126213592233009
						},
						{
							"label": "Wizkid",
							"y": 1.9339712918660288
						},
						{
							"label": "Sark",
							"y": -0.5398187887458273
						},
						{
							"label": "Pence",
							"y": -0.8995
						},
						{
							"label": "Daniel Radcliffe",
							"y": -0.2854763491005996
						},
						{
							"label": "Christmas",
							"y": 2.918141952249472
						},
						{
							"label": "Porsha",
							"y": 1.3122245797290681
						},
						{
							"label": "Notre Dame",
							"y": 0.30458656330749356
						},
						{
							"label": "Walker",
							"y": 0.35891325071496666
						},
						{
							"label": "Vindman",
							"y": null
						},
						{
							"label": "Namor",
							"y": 1.5701923076923077
						},
						{
							"label": "Cenk",
							"y": -0.59567602452404
						},
						{
							"label": "Hive",
							"y": 0.524910452621296
						},
						{
							"label": "Caleb Williams",
							"y": 1.636745237326445
						},
						{
							"label": "Migos",
							"y": -0.16363636363636364
						},
						{
							"label": "Kyrie",
							"y": -0.16370106761565836
						},
						{
							"label": "Grover Cleveland",
							"y": 0.508763388510224
						},
						{
							"label": "Justin Jefferson",
							"y": 1.781512605042017
						},
						{
							"label": "Tumblr",
							"y": 0.5481309956996361
						},
						{
							"label": "NICKI WROTE IT",
							"y": -0.08855850032320621
						},
						{
							"label": "Daily Quordle 296",
							"y": 0.5842311459353575
						},
						{
							"label": "Karen Bass",
							"y": 2.217517776341306
						},
						{
							"label": "Mattress Mack",
							"y": 1.1078527207559465
						},
						{
							"label": "Point Break",
							"y": 0.5813342096615183
						},
						{
							"label": "Bama",
							"y": -0.041626331074540175
						},
						{
							"label": "Mariah Carey",
							"y": 1.377229970807655
						},
						{
							"label": "Fuentes",
							"y": -0.6434333656018071
						},
						{
							"label": "Manchin",
							"y": 1.0639008106819265
						},
						{
							"label": "Dunkey",
							"y": -0.3334932821497121
						},
						{
							"label": "Ticketmaster",
							"y": -1.0578670492587279
						},
						{
							"label": "Balenciaga",
							"y": -2.1426710097719868
						},
						{
							"label": "Takeoff",
							"y": -1.0484552845528454
						},
						{
							"label": "#OWLGrandFinals",
							"y": 2.9473684210526314
						},
						{
							"label": "Thanksgiving",
							"y": 9.099151989562948
						},
						{
							"label": "Zags",
							"y": 0.8927648578811369
						},
						{
							"label": "Mastodon",
							"y": 1.0042248943776406
						},
						{
							"label": "Jason David Frank",
							"y": 1.1560077519379846
						},
						{
							"label": "Black Friday",
							"y": 2.1157963023029516
						},
						{
							"label": "Davido",
							"y": 1.7140077821011672
						},
						{
							"label": "Jeff Jarrett",
							"y": 0.2301639344262295
						},
						{
							"label": "Mordecai",
							"y": -1.726948051948052
						},
						{
							"label": "#thiccsgiving",
							"y": 3.7149094437257437
						},
						{
							"label": "Kathy Griffin",
							"y": -0.6661894535910284
						},
						{
							"label": "George Will",
							"y": 1.4518950437317784
						},
						{
							"label": "Veterans Day",
							"y": 7.523400191021968
						},
						{
							"label": "Charlottesville",
							"y": -2.7994282991900907
						},
						{
							"label": "#WakandaForever",
							"y": 2.7797419971333013
						},
						{
							"label": "Zanab",
							"y": -1.7914669223394055
						},
						{
							"label": "Since Twitter",
							"y": 0.6765279583875162
						},
						{
							"label": "Young MA",
							"y": 1.444407567208762
						},
						{
							"label": " Andy Dalton",
							"y": -2.2594272076372315
						},
						{
							"label": "Gaming",
							"y": 2.5155428024868485
						},
						{
							"label": "Gen Z",
							"y": 1.0825381679389312
						},
						{
							"label": "#RIPJimmyFallon",
							"y": null
						},
						{
							"label": "Liz Cheney",
							"y": -0.006782945736434108
						},
						{
							"label": "Nike",
							"y": 1.2650876054510058
						},
						{
							"label": "#UFC281",
							"y": 0.7409003831417624
						},
						{
							"label": "Thankful",
							"y": 9.756217277486911
						},
						{
							"label": "Dusty Baker",
							"y": 2.3053156146179403
						},
						{
							"label": "Insincere",
							"y": -0.8722222222222222
						},
						{
							"label": "Iraq",
							"y": -0.6443582282573553
						},
						{
							"label": "Boebert",
							"y": 0.46220095693779906
						},
						{
							"label": "Defund NPR",
							"y": -0.28156264888041926
						},
						{
							"label": "Eagles",
							"y": 0.068
						},
						{
							"label": "#Andor",
							"y": -0.5884441575209812
						},
						{
							"label": " Irsay",
							"y": 0.29
						},
						{
							"label": "Lions",
							"y": 1.6544689119170986
						},
						{
							"label": " Taysom",
							"y": 0.37625178826895567
						},
						{
							"label": "Mick",
							"y": 0.5582225105416802
						},
						{
							"label": " Don't Worry Darling",
							"y": -3.290444309190505
						},
						{
							"label": "Paul Ryan",
							"y": -0.6317293949499762
						},
						{
							"label": "Ohio State",
							"y": 0.3131052291801162
						},
						{
							"label": "Powell",
							"y": 0.3395739186571982
						},
						{
							"label": "Richard Fierro",
							"y": 1.6905071521456436
						},
						{
							"label": "Jon Jones",
							"y": -0.6370157819225251
						},
						{
							"label": "#SurvivorSeries",
							"y": 1.7374878915079108
						},
						{
							"label": "Meth",
							"y": -0.6157091853294385
						},
						{
							"label": "#AEWDynamite",
							"y": 1.7421546425105143
						},
						{
							"label": "Emoni Bates",
							"y": 1.4925
						},
						{
							"label": "Blake Masters",
							"y": -0.7782546494992847
						},
						{
							"label": "Michigan",
							"y": 0.630673674151935
						},
						{
							"label": "Rush Hour",
							"y": -0.16887310300290603
						},
						{
							"label": "#Warzone2",
							"y": 2.4314571484604826
						},
						{
							"label": "Twitter 2.0",
							"y": 1.8604097189137685
						},
						{
							"label": "Gonzaga",
							"y": -0.22504038772213247
						},
						{
							"label": "Fauci",
							"y": -1.1212708669897684
						},
						{
							"label": "Atlantic Station",
							"y": -2.2813333333333334
						},
						{
							"label": "Died Suddenly",
							"y": -4.073762536395988
						},
						{
							"label": "England",
							"y": 0.7479018721755971
						},
						{
							"label": "Mr. President",
							"y": 8.204920686306249
						},
						{
							"label": "Jerry Jones",
							"y": -1.0915265200517466
						},
						{
							"label": "Heidi Klum",
							"y": 1.7899966876449156
						},
						{
							"label": "Electron",
							"y": -2.247
						},
						{
							"label": "Ann Coulter",
							"y": -0.3552694325226514
						},
						{
							"label": "Sarah Logan",
							"y": 0.3366385721368369
						},
						{
							"label": "Jesse James",
							"y": 0.616754617414248
						},
						{
							"label": "University of Virginia",
							"y": -5.0115
						},
						{
							"label": "So Twitter",
							"y": 2.7322011757021554
						},
						{
							"label": "Hooters",
							"y": 0.3788367371312552
						},
						{
							"label": "Trent Reznor",
							"y": -0.01522020725388601
						},
						{
							"label": "Jarry",
							"y": 2.2494172494172493
						},
						{
							"label": "DeSantis",
							"y": 0.5533290239172592
						},
						{
							"label": "Space Karen",
							"y": 1.4485103626943006
						},
						{
							"label": "South Carolina",
							"y": 0.1280310378273521
						},
						{
							"label": "Irene Cara",
							"y": 2.6136216914138153
						},
						{
							"label": "#GoBlue",
							"y": 3.5282349144885448
						},
						{
							"label": "Nick Fuentes",
							"y": 0.5740200842241658
						}
					]
				}
			]
		}
		
		return (
		<div style={{ width: "1000px", marginLeft: "100px", overflowX: "auto" ,marginTop: "100px" }}>
			<CanvasJSChart options = { options  } 
			/>
			{/* <div className="scroll-bar" style={{ width:"100%" }}></div> */}
		</div>
		);
	}
}
 
export default MultiLineChart;