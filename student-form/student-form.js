/**
 * Copyright (C) 2016. No part of this file may be replicated without the
 *   explicit written consent of all authors of this project.
 */
'use strict';
angular.module('lvmApp')
    .controller('FormController', function($scope) {
        var form = this;
        form.formDefinition = [
            {
                id: 'studentinfo',
                name: 'Student Information',
                fields: [
                    [
                        {name: 'firstName', class: 'col-md-3', value: '', type: 'text', trim: true, placeholder: 'First Name'},
                        {name: 'lastName', class: 'col-md-3', value: '', type: 'text', trim: true, placeholder: 'Last Name'},
                        {name: 'dateOfBirth', class: 'col-md-3', value: '', type: 'date', trim: true, placeholder: 'Date of Birth'},
                        {name: 'gender', class: 'col-md-3', value: '', type: 'dropdown', options: ['Male', 'Female'], placeholder: 'Gender'}
                    ],

                ]
            },
            {
                id: 'contactinfo',
                name: 'Contact Information',
                fields: [
                    [
                        {name: 'address1', type: 'text', trim: true, maxlength: 255, placeholder: 'Address Line 1'},
                        {name: 'address2', type: 'text', trim: true, maxlength: 255, placeholder: 'Address Line 2'}
                    ],
                    [
                        {name: 'city', class: 'col-md-6', type: 'text', trim: true, maxlength: 255, placeholder: 'City'},
                        {name: 'state', class: 'col-md-2', type: 'text', trim: true, maxlength: 2, placeholder: 'State'},
                        {name: 'zip', class: 'col-md-2', type: 'text', trim: true, maxlength: 10, placeholder: 'ZIP Code'},
                        {name: 'okayToMail', class: 'col-md-2', type: 'boolean', placeholder: 'OK To Mail?'}
                    ],
                    [
                        {name: 'email', class: 'col-md-10', type: 'email', trim: true, maxlength: 255, placeholder: 'Email'},
                        {name: 'okayToEmail', class: 'col-md-2', type: 'boolean', placeholder: 'OK To Email?'}
                    ],
                    [
                        {name: 'cellPhone', class: 'col-md-2', type: 'phone', trim: true, maxlength: 10, placeholder: 'Cell Number'},
                        {name: 'okayToCallCell', class: 'col-md-2', type: 'boolean', placeholder: 'Message OK?'},
                        {name: 'okayToCallCellLVM', class: 'col-md-2', type: 'boolean', placeholder: 'LVM OK?'},
                        {name: 'homePhone', class: 'col-md-2', type: 'phone', trim: true, maxlength: 10, placeholder: 'Home Number'},
                        {name: 'okayToCallHome', class: 'col-md-2', type: 'boolean', placeholder: 'Message OK?'},
                        {name: 'okayToCallHomeLVM', class: 'col-md-2', type: 'boolean', placeholder: 'LVM OK?'}
                    ],
                    [
                        {name: 'workPhone', class: 'col-md-2', type: 'phone', trim: true, maxlength: 10, placeholder: 'Work Number'},
                        {name: 'okayToCallWork', class: 'col-md-2', type: 'boolean', placeholder: 'Message OK?'},
                        {name: 'okayToCallWorkLVM', class: 'col-md-2', type: 'boolean', placeholder: 'LVM OK?'},
                        {name: 'alternatePhone', class: 'col-md-2', type: 'phone', trim: true, maxlength: 10, placeholder: 'Alternate Number'},
                        {name: 'okayToCallAlternate', class: 'col-md-2', type: 'boolean', placeholder: 'Message OK?'},
                        {name: 'okayToCallAlternateLVM', class: 'col-md-2', type: 'boolean', placeholder: 'LVM OK?'},
                    ],
                    [
                        {name: 'emergencyContactName', class: 'col-md-8', type: 'text', trim: true, maxlength: 255, placeholder: 'Emergency Contact (Name)'},
                        {name: 'emergencyContactNumber', class: 'col-md-4', type: 'phone', trim: true, placeholder: 'Emergency Contact (Phone)'},
                    ],
                    [
                        {name: 'howDidYouHear', type: 'text', trim: true, maxlength: 255, placeholder: 'How did you hear about LVM?'},
                    ],
                    [
                        {name: 'whyDidYouChoose', type: 'text', trim: true, maxlength: 255, placeholder: 'Why did you choose LVM?'},
                    ],
                ]
            },
            {
                id: 'demographics',
                name: 'Demographics',
                fields: [
                	[
                		{name: 'race', class: 'col-md-4', value: '', type: 'dropdown', options: [{name:'American Indian', value:1},{name:'Native Hawaiian/Pacific Islander', value:5},{name:'Asian', value:2},{name:'White', value:9},{name:'Black or African American', value:3},{name:'Hispanic/Latino', value:7}], placeholder: 'Race'},
                		{name: 'ishispanic', class: 'col-md-2', type: 'boolean', placeholder: 'Hispanic?'},
                		{name: 'countryoforigin', class: 'col-md-4', value:'', type:'dropdown', options: [{name:'USA', value:1},{name:'Afghanistan', value:2},{name:'Albania', value:3},{name:'Algeria', value:4},{name:'American Samoa', value:5},{name:'Andorra', value:6},
                		{name:'Angola', value:7},{name:'Antigua and Barbuda', value:8},{name:'Argentina', value:9},{name:'Armenia', value:10},{name:'Australia', value:11},{name:'Austria', value:12},{name:'Azerbaijan', value:13},
                		{name:'Bahamas', value:14},{name:'Bahrain', value:15},{name:'Bangladesh', value:16},{name:'Barbados', value:17},{name:'Belarus', value:18},{name:'Belgium', value:19},{name:'Belize', value:20},{name:'Benin', value:21},{name:'Bermuda', value:22},
                		{name:'Bhutan', value:23},{name:'Bolivia', value:24},{name:'Bosnia and Herzegovina', value:25},{name:'Botswana', value:26},{name:'Brazil', value:27},{name:'Brunei Darussalam', value:28},{name:'Bulgaria', value:29},{name:'Burkina Faso', value:30},
                		{name:'Burundi', value:31},{name:'Cambodia', value:32}, {name:'Cameroon', value:33},{name:'Canada', value:34},{name:'Cape Verde', value:35},
                		{name:'Central African Republic', value:36},{name:'Chad', value:37},{name:'Chile', value:38},{name:'China', value:39},{name:'Colombia', value:40},{name:'Comoros', value:41},{name:'Congo', value:42},{name:'Cook Islands', value:43},{name:'Costa Rica', value:44},
						{name:'Cote d\'Ivoire', value:45},{name:'Croatia', value:46},{name:'Cuba', value:47},{name:'Cyprus', value:48},{name:'Czech Republic', value:49},{name:'Dem.Rep.of the Congo', value:50},{name:'Denmark', value:51},{name:'Djibouti', value:52},{name:'Dominica', value:53},
						{name:'Dominican Republic', value:54},{name:'East Timor', value:55},{name:'Ecuador', value:56},{name:'Egypt', value:57},{name:'El Salvador', value:58},{name:'Equatorial Guinea', value:59},{name:'Eritrea', value:60},{name:'Estonia', value:61},{name:'Ethiopia', value:62},{name:'Fiji', value:63},
						{name:'Finland', value:64},{name:'France', value:65},{name:'French Guiana', value:66},{name:'French Polynesia', value:67},{name:'Gabon', value:68},{name:'Gambia', value:69},{name:'Georgia', value:70},{name:'Germany', value:71},{name:'Ghana', value:72},{name:'Gibraltar', value:73},
						{name:'Greece', value:74},{name:'Grenada', value:75},{name:'Guadeloupe', value:76},{name:'Guam', value:77},{name:'Guatemala', value:78},{name:'Guinea', value:79},{name:'Guinea-Bissau', value:80},{name:'Guyana', value:81},{name:'Haiti', value:82},{name:'Honduras', value:83},{name:'Hong Kong S A R', value:84},{name:'Hungary', value:85},
						{name:'Iceland', value:86},{name:'India', value:87},{name:'Indonesia', value:88},{name:'Iran (Islamic Rep. Of)', value:89},{name:'Iraq', value:90},{name:'Ireland', value:91},{name:'Israel', value:92},{name:'Italy', value:93},{name:'Jamaica', value:94},{name:'Japan', value:95},{name:'Jordan', value:96},
						{name:'Kazakhstan', value:97},{name:'Kenya', value:98},{name:'Kiribati', value:99},{name:'Korea, Dem.People\'s Rep.', value:100},{name:'Korea, Republic of', value:101},{name:'Kuwait', value:102},{name:'Kyrgyzstan', value:103},{name:'Lao People\'s Dem. Rep.', value:104},{name:'Latvia', value:105},
						{name:'Lebanon', value:106},{name:'Lesotho', value:107},{name:'Liberia', value:108},{name:'Libyan Arab Jamahiriya', value:109},{name:'Liechtenstein', value:110},{name:'Lithuania', value:111},{name:'Luxembourg', value:112},{name:'Macao S A R', value:113},{name:'Madagascar', value:114},{name:'Malawi', value:115},
						{name:'Malaysia', value:116},{name:'Maldives', value:117},{name:'Mali', value:118},{name:'Malta', value:119},{name:'Marshall Islands', value:120},{name:'Martinique', value:121},{name:'Mauritania', value:122},{name:'Mauritius', value:123},{name:'Mexico', value:124},{name:'Micronesia, Fed. States of', value:125},
						{name:'Monaco', value:126},{name:'Mongolia', value:127},{name:'Morocco', value:128},{name:'Mozambique', value:129},{name:'Myanmar', value:130},{name:'Namibia', value:131},{name:'Nauru', value:132},{name:'Nepal', value:133},{name:'Netherlands', value:134},{name:'Netherlands Antilles', value:135},{name:'New Caledonia', value:136},
						{name:'New Zealand', value:137},{name:'Nicaragua', value:138},{name:'Niger', value:139},{name:'Nigeria', value:140},{name:'Northern Mariana Islands', value:141},{name:'Norway', value:142},{name:'Occ. Palestinian Territory', value:143},{name:'Oman', value:144},
						{name:'Pakistan', value:145},{name:'Palau', value:146},{name:'Panama', value:147},{name:'Papua New Guinea', value:148},{name:'Paraguay', value:149},{name:'Peru', value:150},{name:'Philippines', value:151},{name:'Poland', value:152},{name:'Puerto Rico', value:153},{name:'Qatar', value:154},
						{name:'Republic of Moldova', value:155},{name:'Reunion', value:156},{name:'Romania', value:157},{name:'Russian Federation', value:158},{name:'Rwanda', value:159},{name:'Saint Kitts and Nevis', value:160},{name:'Saint Lucia', value:161},{name:'Saint Vincent / Grenadines', value:162},{name:'Samoa', value:163},
						{name:'San Marino', value:164},{name:'Sao Tome and Principe', value:165},{name:'Saudi Arabia', value:166},{name:'Senegal', value:167},{name:'Seychelles', value:168},{name:'Sierra Leone', value:169},{name:'Singapore', value:170},{name:'Slovakia', value:171},{name:'Slovenia', value:172},{name:'Solomon Islands', value:173},
						{name:'Somalia', value:174},{name:'South Africa', value:175},{name:'Spain', value:176},{name:'Sri Lanka', value:177},{name:'Sudan', value:178},{name:'Suriname', value:179},{name:'Swaziland', value:180},{name:'Sweden', value:181},{name:'Switzerland', value:182},{name:'Syrian Arab Republic', value:183},
						{name:'Tajikistan', value:184},{name:'Thailand', value:185},{name:'The FYR of Macedonia', value:186},{name:'Togo', value:187},{name:'Tonga', value:188},{name:'Trinidad and Tobago', value:189},{name:'Tunisia', value:190},{name:'Turkey', value:191},{name:'Turkmenistan', value:192},{name:'Tuvalu', value:193},
						{name:'U.S. Virgin Islands', value:194},{name:'Uganda', value:195},{name:'Ukraine', value:196},{name:'United Arab Emirates', value:197},{name:'United Kingdom', value:198},{name:'United Rep. Of Tanzania', value:199},{name:'Uruguay', value:200},
						{name:'Uzbekistan', value:201},{name:'Vanuatu', value:202},{name:'Venezuela', value:203},{name:'Viet Nam', value:204},{name:'Western Sahara', value:205},{name:'Yemen', value:206},{name:'Yugoslavia', value:207},{name:'Zambia', value:208},{name:'Zimbabwe', value:209},{name:'Portugal', value:210}], placeholder: 'Country of Origin'},
                		{name: 'nativelanguage', class: 'col-md-3', value:'', type: 'dropdown', options: [{name:'English', value:1},{name:'Albanian', value:2},{name:'Arabic', value:3},{name:'Cambodian', value:4},{name:'CapeVerdeanCreole', value:5},{name:'Chinese - Cantonese', value:6},{name:'Chinese - Mandarin', value:7},{name:'Chinese - Toisanese', value:8},
                		{name:'Farsi', value:9},{name:'French', value:10},{name:'Gaelic', value:11},{name:'German', value:12},{name:'Greek', value:13},{name:'Haitian Creole', value:14},{name:'Hindi', value:15},{name:'Italian', value:16},{name:'Japanese', value:17},
                		{name:'Korean', value:18},{name:'Laotian', value:19},{name:'Lebanese', value:20},{name:'Polish', value:21},{name:'Portuguese', value:22},{name:'Russian', value:23},{name:'Spanish', value:24},{name:'Syrian', value:25},{name:'Turkish', value:26},{name:'Urdu', value:27},{name:'Vietnamese', value:28},{name:'Other', value:20}], placeholder: 'Native Language'}
                		],
                ]
			},
			{
                id: 'timesavailable',
                name: 'Times',
                fields: [
                [
                	{name: 'available', type: 'timetable'}
                ],
                ]
            },
            {
				id: 'tutorpreference',
				name: 'Tutor Preference',
				fields: [
				[
					{name: 'preference', type: 'preferenceTable'},
					{name: 'preferencecomments', type: 'text', placeholder:'Comments:'},
					{name: 'meetatpl', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Can you meet at the Public Library?'},
					{name: 'if not, where?', class: 'col-md-9', value: '', type: 'text', trim:true, placeholder: 'If not, where?'}
				],
				]
			},
			{
				id: 'family',
				name: 'Family Information',
				fields: [
				[
					{name: 'haschildren', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you have any Children?'},
					{name: 'dependantTable', type: 'dependantTable'},
					{name: 'singleparent', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Are you a single parent?'},
					{name: 'familycomments', type: 'text', placeholder:'Comments:'}
				],
				]
			},
			{
				id: 'education',
				name: 'Educational Experience',
				fields: [
				[
					{name: 'parentsread', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do your parents read?'},
					{name: 'readtoyou', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Did they read to you?'},
					{name: 'schoolattended', class: 'col-md-9', value: '', type: 'text', trim: true, placeholder: 'Where did you attend school?'},
					{name: 'lastgradecompleted', class: 'col-md-3', value: '', type: 'dropdown', options: ['5 or below', '6', '7', '8', '9', '10', '11', '12'], placeholder: 'Grade Completed:'},
					{name: 'completeddate', class: 'col-md-3', value: '', type: 'date', trim: true, placeholder: 'Completion Date:'},
					{name: 'whatwasschoollike', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'What was school like? When did you realize reading was difficult?'},
					{name: 'tutoredbefore', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Are you now/were you ever in a reading/tutoring program? (If yes, where and when, and what did you like or dislike about your experience?)'},
					{name: 'howwillyourlifeimprove', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'How will your life be different when your reading and writing improve?'},
				],
				]
			},
     		{
                id: 'branchinfo',
                name: 'Branch Information',
                fields: [
                [
				 {name: 'occupation', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'Occupation:'},
				  {name: 'employer', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'Employer:'},
				   {name: 'city', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'City/Town'},
				    {name: 'fulltime', class: 'col-md-2', value: '', type: 'checkbox', trim: true, placeholder: 'Full-Time'},
				     {name: 'partime', class: 'col-md-2', value: '', type: 'checkbox', trim: true, placeholder: 'Part-Time'},
				      {name: 'multiplejobs', class: 'col-md-2', value: '', type: 'checkbox', trim: true, placeholder: 'Multiple Jobs?'},
				       {name: 'temporaryjobs', class: 'col-md-2', value: '', type: 'checkbox', trim: true, placeholder: 'Temporary Jobs(s)?'},
				        {name: 'recentlayoff', class: 'col-md-6', value: '', type: 'boolean', trim: true, placeholder: 'Recent Layoff?'},
				         {name: 'concernlayoff', class: 'col-md-6', value: '', type: 'boolean', trim: true, placeholder: 'Concern Re: Recent Layoff?'},
				          {name: 'tafdc', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Transitional Aid to Families with Dependent Children?'},
				           {name: 'eaedc', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Emergency Assistance to Elderly, Disabled and Children?'},
				            {name: 'snap', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Supplemental Nutrition Assistance Program or Food Stamps?'},
				             {name: 'ea', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Emergency Assistance?'},
				              {name: 'ssi', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Supplimental Security Income?'},
				               {name: 'wic', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Public Assistance: Women, Infants, and Childrens Programs?'},
				                {name: 'otherpublicassistance', class: 'col-md-3', value: '', type: 'text', trim: true, placeholder: 'Other:'},
				                 {name: 'workexperience', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Tell me about your work experience (Job Tittles(s) and duration of employment, what job skills do you have; What did you like or dislike about past jobs?):'},
				                  {name: 'jobtraining', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Have you attended any job-related training or earned any job-related certificates, licenses, etc? (If yes, what kind, where, and when?'}

				],
                ]
		    },
            {
                id: 'goals',
                name: 'Goals',
                fields: [
                [
                {name: 'whylitval', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Is there a special reason you are seeking help now? What goals would you like to work towards (E.G, GED, Driver\'s license, Help kids with homework, Get a better job) '},
                 {name: 'anychallanges', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Are there any factors that you think will make it especially challanging for you to reach your goals? (Housing, Health, Work, Personal or Family Issues?)'},
                  {name: 'vaktlearningstrengths', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'V A K T Learning Strengths:'},
                   {name: 'hobbies', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Hobbies (i.e Movies, Exercise, Gardening), Interests and Activities/Community Engagement:'},
                    {name: 'whatareyougoodat', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'What are you good at? What do you enjoy doing?'},
                     {name: 'readinginterests', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'Things/Topics interested in reading:'},
                      {name: 'anyotherinfo', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Is there anything else you would like us to know about you?'}

                ],
                ]
            },
            {
                id: 'computerskills',
                name: 'Computer Skills',
                fields: [
                [
                {name: 'havecomputer', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you have a computer at home?'},
                {name: 'usesmartphone', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use a smart phone?'},
                {name: 'usecomputer', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use a computer at home?'},
                {name: 'useemail', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use email?'},
                {name: 'usecomputeratlibrary', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use a computer at the library?'},
                {name: 'useinternet', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use the Internet?'},
                {name: 'usecomputeratwork', class: 'col-md-3', value: '', type: 'boolean', trim: true, placeholder: 'Do you use a computer at work?'}
				],
                ]
            },
			{
                id: 'disabilitiesandaccommodations',
                name: 'Disabilities and Accommodations',
                fields: [
                [
				{name: 'understanddisclosure', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Does the Student understand that He/She is not required to disclose a disability?'},
				{name: 'wishtodisclose', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Does the Student wish to disclose a disability?'},
				{name: 'understandaccommodations', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Does the student understand that self-disclosing a disability makes him/her eligible for reasonable accommoations?'},
				{name: 'requestanyspecific', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'If Yes to #3, Does the student wish to request any specific accomodations? If yes, Please explain below in the notes.'},
				{name: 'intervierwerobservations', class: 'col-md-12', value: '', type: 'boolean', trim: true, placeholder: 'Does the interviewer observe anything?'},
				{name: 'explainobservations', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'If Yes, Explain below.'}
                ],
                ]
            },
			{
                id: 'testresults',
                name: 'Test Results',
                fields: [
                [
                {name: 'explainobservations', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'TABE Score:'},
                {name: 'explainobservations', class: 'col-md-6', value: '', type: 'date', trim: true, placeholder: 'TABE Date:'},
                {name: 'explainobservations', class: 'col-md-6', value: '', type: 'text', trim: true, placeholder: 'MAPT Score:'},
                {name: 'explainobservations', class: 'col-md-6', value: '', type: 'date', trim: true, placeholder: 'MAPT Date:'},


                ],
                ]
            },
			{
                id: 'interviewerscomments',
                name: 'Interviewer\'s Comments/Other Information',
                fields: [
                [
                {name: 'explainobservations', class: 'col-md-12', value: '', type: 'text', trim: true, placeholder: 'Any other comments?:'}

                ],
                ]
            },
            {
                id: 'branchinfo',
                name: 'Branch Information',
                fields: [
                [
				{name: 'affiliate', class: 'col-md-12', value: '', type: 'dropdown', options: ['Boston', 'Project Lighthouse', 'Fitchburg', 'Framingham', 'Lowell', 'Norwood', 'Orange-Athol', 'Pittsfield', 'Quaboag Valley', 'Quincy', 'Tri Community', 'Soughton', 'Worcester'], placeholder:'Affiliate Site'}
                ],
                ]
            }
        ];
        var url:

        function myController($scope){
		    $scope.submitForm=function(){
		        var data=$scope.fields;
		        var url='/lvm/api/accounts'
		        $http.post(url, data);
		    }

		}
        };
    });