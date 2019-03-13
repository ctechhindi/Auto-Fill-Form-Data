/**
 * Vue js
 */
Vue.use(Buefy.default);

new Vue({
    el: '#keys',
    data: {

        /**
         * Default Autocomplete Keys Name
         * [CODY IN]: /key.js
         * [CODY IN]: /options.js
         * [UPDATE IN]: setActiveUserDataForAutocomplete()
         */
        defaultAutoKeys: {
            "Full Name": "name",
            "First Name": "name.first",
            "Middle Name": "name.middle",
            "Last Name": "name.last",
            "Father Name": "father",
            "Mother Name": "mother",
            "Date of Birth": "dob",
            "Gender": "gender",
            "Religion": "religion",
            "Category": "category",
            "Nationality": "nationality",
            "Country": "country",
            "Body Mark1": "body.mark1",
            "Body Mark2": "body.mark2",
            "Marital Status": "marital.status",
            // Permanent Address Information
            "PermanentAddress": {
                "Address1": "address1.p",
                "Address2": "address2.p",
                "Address3": "address3.p",
                "City": "address.p.city",
                "State": "address.p.state",
                "PinCode": "address.p.pincode",
                "PinCode Num": "06-address.p.pincode",
                "Mobile": "mobile.p",
                "Mobile Num": "91-mobile.p",
                "Email": "email.p",
            },
            // Correspondence Address Information
            "CorrespondenceAddress": {
                "Address1": "address1.c",
                "Address2": "address2.c",
                "Address3": "address3.c",
                "City": "address.c.city",
                "State": "address.c.state",
                "PinCode": "address.c.pincode",
                "PinCode Num": "06-address.c.pincode",
                "Mobile": "mobile.c",
                "Mobile Num": "91-mobile.c",
                "Email": "email.c",
            },
            // (High School) Educational Qualification
            "HighSchool": {
                "University": "high.university",
                "Passing School": "high.passing.school",
                "Certificate No": "high.certificate",
                "Roll No": "high.rollNo",
                "Sr No": "high.srNo",
                "Passing Year": "high.passing.year",
                "Max Marks": "high.max.marks",
                "Obtained Marks": "high.obtained.marks",
                "Percentage": "high.percentage",
                "Subjects": "high.subjects",
            },
            // (Intermediate) Educational Qualification
            "Intermediate": {
                "University": "inter.university",
                "Passing School": "inter.passing.school",
                "Certificate No": "inter.certificate",
                "Roll No": "inter.rollNo",
                "Sr No": "inter.srNo",
                "Passing Year": "inter.passing.year",
                "Max Marks": "inter.max.marks",
                "Obtained Marks": "inter.obtained.marks",
                "Percentage": "inter.percentage",
                "Subjects": "inter.subjects",
            },
            // Other Educational Qualification Details
            "OtherEdu": {
                "Deg1": {
                    "Name": "degree1.name",
                    "Subjects": "degree1.subjects",
                    "University": "degree1.university",
                    "Mode Of Course": "degree1.modeOfCourse",
                    "Certificate No": "degree1.certificateNo",
                    "Roll No": "degree1.rollNo",
                    "Sr No": "degree1.srNo",
                    "Passing Year": "degree1.passingYear",
                    "Max Marks": "degree1.maxMarks",
                    "Obtained Marks": "degree1.obtainedMarks",
                    "Percentage": "degree1.percentage",
                },
                "Deg2": {
                    "Name": "degree2.name",
                    "Subjects": "degree2.subjects",
                    "University": "degree2.university",
                    "Mode Of Course": "degree2.modeOfCourse",
                    "Certificate No": "degree2.certificateNo",
                    "Roll No": "degree2.rollNo",
                    "Sr No": "degree2.srNo",
                    "Passing Year": "degree2.passingYear",
                    "Max Marks": "degree2.maxMarks",
                    "Obtained Marks": "degree2.obtainedMarks",
                    "Percentage": "degree2.percentage",
                },
                "Deg3": {
                    "Name": "degree3.name",
                    "Subjects": "degree3.subjects",
                    "University": "degree3.university",
                    "Mode Of Course": "degree3.modeOfCourse",
                    "Certificate No": "degree3.certificateNo",
                    "Roll No": "degree3.rollNo",
                    "Sr No": "degree3.srNo",
                    "Passing Year": "degree3.passingYear",
                    "Max Marks": "degree3.maxMarks",
                    "Obtained Marks": "degree3.obtainedMarks",
                    "Percentage": "degree3.percentage",
                },
                "Deg4": {
                    "Name": "degree4.name",
                    "Subjects": "degree4.subjects",
                    "University": "degree4.university",
                    "Mode Of Course": "degree4.modeOfCourse",
                    "Certificate No": "degree4.certificateNo",
                    "Roll No": "degree4.rollNo",
                    "Sr No": "degree4.srNo",
                    "Passing Year": "degree4.passingYear",
                    "Max Marks": "degree4.maxMarks",
                    "Obtained Marks": "degree4.obtainedMarks",
                    "Percentage": "degree4.percentage",
                },
                "Deg5": {
                    "Name": "degree5.name",
                    "Subjects": "degree5.subjects",
                    "University": "degree5.university",
                    "Mode Of Course": "degree5.modeOfCourse",
                    "Certificate No": "degree5.certificateNo",
                    "Roll No": "degree5.rollNo",
                    "Sr No": "degree5.srNo",
                    "Passing Year": "degree5.passingYear",
                    "Max Marks": "degree5.maxMarks",
                    "Obtained Marks": "degree5.obtainedMarks",
                    "Percentage": "degree5.percentage",
                },
            },
            // Educational Certificate Details
            "EduCert": {
                "Cert1": {
                    "Name": "certificate1.name",
                    "Serial No": "certificate1.serialNo",
                    "Registration No": "certificate1.registrationNo",
                    "Roll No": "certificate1.rollNo",
                    "Grade": "certificate1.grade",
                    "Percentage": "certificate1.percentage",
                    "Issues Date": "certificate1.issuesDate",
                },
                "Cert2": {
                    "Name": "certificate2.name",
                    "Serial No": "certificate2.serialNo",
                    "Registration No": "certificate2.registrationNo",
                    "Roll No": "certificate2.rollNo",
                    "Grade": "certificate2.grade",
                    "Percentage": "certificate2.percentage",
                    "Issues Date": "certificate2.issuesDate",
                },
                "Cert3": {
                    "Name": "certificate3.name",
                    "Serial No": "certificate3.serialNo",
                    "Registration No": "certificate3.registrationNo",
                    "Roll No": "certificate3.rollNo",
                    "Grade": "certificate3.grade",
                    "Percentage": "certificate3.percentage",
                    "Issues Date": "certificate3.issuesDate",
                },
                "Cert4": {
                    "Name": "certificate4.name",
                    "Serial No": "certificate4.serialNo",
                    "Registration No": "certificate4.registrationNo",
                    "Roll No": "certificate4.rollNo",
                    "Grade": "certificate4.grade",
                    "Percentage": "certificate4.percentage",
                    "Issues Date": "certificate4.issuesDate",
                },
                "Cert5": {
                    "Name": "certificate5.name",
                    "Serial No": "certificate5.serialNo",
                    "Registration No": "certificate5.registrationNo",
                    "Roll No": "certificate5.rollNo",
                    "Grade": "certificate5.grade",
                    "Percentage": "certificate5.percentage",
                    "Issues Date": "certificate5.issuesDate",
                },
            },
            // Work Experience Details
            "WorkExp": {
                "Exp1": {
                    "Area of Work": "exp1.area",
                    "Organization Nature": "exp1.orgType",
                    "Organization Name": "exp1.orgName",
                    "Post": "exp1.post",
                    "Job Responsibilities": "exp1.resp",
                    "Join Date": "exp1.joinDate",
                    "Leave Date": "exp1.leaveDate",
                },
                "Exp2": {
                    "Area of Work": "exp2.area",
                    "Organization Nature": "exp2.orgType",
                    "Organization Name": "exp2.orgName",
                    "Post": "exp2.post",
                    "Job Responsibilities": "exp2.resp",
                    "Join Date": "exp2.joinDate",
                    "Leave Date": "exp2.leaveDate",
                },
                "Exp3": {
                    "Area of Work": "exp3.area",
                    "Organization Nature": "exp3.orgType",
                    "Organization Name": "exp3.orgName",
                    "Post": "exp3.post",
                    "Job Responsibilities": "exp3.resp",
                    "Join Date": "exp3.joinDate",
                    "Leave Date": "exp3.leaveDate",
                },
                "Exp4": {
                    "Area of Work": "exp4.area",
                    "Organization Nature": "exp4.orgType",
                    "Organization Name": "exp4.orgName",
                    "Post": "exp4.post",
                    "Job Responsibilities": "exp4.resp",
                    "Join Date": "exp4.joinDate",
                    "Leave Date": "exp4.leaveDate",
                },
                "Exp5": {
                    "Area of Work": "exp5.area",
                    "Organization Nature": "exp5.orgType",
                    "Organization Name": "exp5.orgName",
                    "Post": "exp5.post",
                    "Job Responsibilities": "exp5.resp",
                    "Join Date": "exp5.joinDate",
                    "Leave Date": "exp5.leaveDate",
                },
            },
            // Identification
            "Identity": {
                "aadhaar": {
                    "Aadhaar": "aadhaar",
                    "Aadhaar Num": "12-aadhaar",
                },
                "pan": {
                    "Pan": "pan",
                },
                "voter": {
                    "Voter": "voter",
                },
                "caste": {
                    "Serial No": "caste.serialNo",
                    "Issues Date": "caste.issuesDate",
                    "Issues By": "caste.issuesBy",
                },
                "residential": {
                    "Serial No": "residential.serialNo",
                    "Issues Date": "residential.issuesDate",
                    "Issues By": "residential.issuesBy",
                },
                "income": {
                    "Serial No": "income.serialNo",
                    "Issues Date": "income.issuesDate",
                    "Issues By": "income.issuesBy",
                },
            },
            // First Bank Details
            "Bank1": {
                "Name": "bank1.name",
                "Account No": "bank1.accountNo",
                "Branch": "bank1.branch",
                "IFSC": "bank1.ifsc",
                "Customer Name": "bank1.customerName",
            },
            // Second Bank Details
            "Bank2": {
                "Name": "bank2.name",
                "Account No": "bank2.accountNo",
                "Branch": "bank2.branch",
                "IFSC": "bank2.ifsc",
                "Customer Name": "bank2.customerName",
            },
            // First ATM Details
            "ATM1": {
                "Bank Name": "atm1.bankName",
                "ATM No": "atm1.no",
                "Expire Date": "atm1.expireDate",
                "Code": "atm1.code",
                "Customer Name": "atm1.customerName",
            },
            // Second ATM Details
            "ATM2": {
                "Bank Name": "atm2.bankName",
                "ATM No": "atm2.no",
                "Expire Date": "atm2.expireDate",
                "Code": "atm2.code",
                "Customer Name": "atm2.customerName",
            },
        },

        // Update Autocomplete Keys Name
        updateAutoKeys: false
    },

    methods: {

        /**
         * Edit and Update Autocomplete Keys Name
         * @param: {string} key [default, update]
         */
        editAutocompleteKeys: function (key) {
            // create the editor
            var container = document.getElementById("jsoneditor");
            var options = {
                "mode": "tree", // tree, text
                "search": true,
                // "mainMenuBar": false,
                // "navigationBar": false,
                // "statusBar": false,
                // "enableSort": false,
            };

            window.editor = new JSONEditor(container, options);

            if (key == "update") {
                window.editor.set(JSON.parse(this.updateAutoKeys));
            } else {
                window.editor.set(this.defaultAutoKeys);
            }

            // get json
            // window.json = window.editor.get();

            window.editor.expandAll();

            $(".jsoneditor-button").hide();
            $(".jsoneditor-field").removeAttr("contenteditable");
        },

        /**
         * Save Autocomplete Keys
         */
        saveKeys: function () {
            var obj = window.editor.get();
            this.setValueINExtensionStorage(JSON.stringify(obj), "extensionData__newAutocompleteKeys");
        },

        /**
         * Rest Keys
         */
        resetKeys: function () {
            // Remove Value
            chrome.storage.local.remove("extensionData__newAutocompleteKeys");
            window.editor.update(this.defaultAutoKeys)
        },

        /**
         * [PRIVATE] Set Extension Local Data in Vue js Variable
         * Return new promise
         * [CODY IN]: /key.js
         * [CODY IN]: /options.js
         */
        setDataINVariable: function (key, variable) {
            that = this;
            return new Promise(function (resolve, reject) {
                chrome.storage.local.get([key], function (budget) {
                    if (budget[key] != undefined && budget[key] !== "") {
                        // console.log(budget[key]);
                        that[variable] = budget[key];
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            });
        },

        /**
         * [PRIVATE] Set Vue JS Variable Value in Extension Local Storage
         * [CODY IN]: /key.js
         * [CODY IN]: /options.js
         */
        setValueINExtensionStorage: function (value, key) {
            try {
                var obj = {};
                obj[key] = value;
                chrome.storage.local.set(obj, function () {
                    // Notify that we saved.
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError.message);
                    } else {
                        console.log("Key : " + key + "| New Value : " + value);
                    }
                });
            }
            catch (e) { console.log('Caught', e); }
        },
    },

    mounted: function () {
        that = this;

        // New Autocomplete Keys
        this.setDataINVariable('extensionData__newAutocompleteKeys', 'updateAutoKeys').then(function (resp) {
            if (resp === true) { // Promise Request
                // Update Autocomplete Keys
                that.editAutocompleteKeys("update");
            } else {
                // Default Autocomplete Keys
                that.editAutocompleteKeys("default");
            }
        }).catch(function (error) {
            console.error(error);
        });
    }
});