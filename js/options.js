/**
 * Vue js
 */
Vue.use(Buefy.default);

// awesome-notifications
var options = {
    position: "top-right",
    // duration: "500000",
    maxNotifications: 5,
    icons: {
        tip: "help-circle",
        info: "information",
        success: "checkbox-marked-circle",
        warning: "alert-box",
        alert: "alert",
        confirm: "alert",
        prefix: "<i class='mdi mdi-48px mdi-",
        suffix: "'></i>",
    }
}
var notifier = new AWN(options);

new Vue({
    el: '#app',

    data: {
        version: "V0.0.3",
        title: "Auto Fill Form Data",
        description: "auto fill and autocomplete user data with key name",
        // Application Status
        appStatus: false,
        // Active Tab Index
        activeTab: 1,
        /**
         * [Object] User Information
         * This object clone : 
         * clearAddUserFormData(),
         * updateUserData(),
         * setActiveUserDataForAutocomplete()
         */
        userObjData: {
            firstName: "",
            middleName: "",
            lastName: "",
            fatherName: "",
            motherName: "",
            dob: "", // Date of Birth
            gender: "M",
            religion: "",
            category: "",
            nationality: "",
            country: "",
            bodyMark1: "",
            bodyMark2: "",
            maritalStatus: "",
            // Permanent Address
            addressPermanent: {
                address1: "",
                address2: "",
                address3: "",
                city: "",
                state: "",
                pinCode: "",
                mobile: "",
                email: "",
            },
            // Address for Correspondence
            addressCorrespondence: {
                address1: "",
                address2: "",
                address3: "",
                city: "",
                state: "",
                pinCode: "",
                mobile: "",
                email: "",
            },
            // (High School) Educational Qualification
            highSchool: {
                university: "",
                passingSchool: "",
                certificateNo: "",
                rollNo: "",
                srNo: "",
                passingYear: "",
                maxMarks: "",
                obtainedMarks: "",
                percentage: "",
                subjects: "",
            },
            // (Intermediate) Educational Qualification
            intermediate: {
                university: "",
                passingSchool: "",
                certificateNo: "",
                rollNo: "",
                srNo: "",
                passingYear: "",
                maxMarks: "",
                obtainedMarks: "",
                percentage: "",
                subjects: "",
            },
            // Other Educational Qualification Details
            otherEdu: {
                degree1: {
                    name: "",
                    subjects: "",
                    university: "",
                    modeOfCourse: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                },
                degree2: {
                    name: "",
                    subjects: "",
                    university: "",
                    modeOfCourse: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                },
                degree3: {
                    name: "",
                    subjects: "",
                    university: "",
                    modeOfCourse: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                },
                degree4: {
                    name: "",
                    subjects: "",
                    university: "",
                    modeOfCourse: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                },
                degree5: {
                    name: "",
                    subjects: "",
                    university: "",
                    modeOfCourse: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                },
            },
            // Educational Certificate Details
            certificate: {
                certificate1: {
                    name: "",
                    serialNo: "",
                    regNo: "",
                    rollNo: "",
                    grade: "",
                    percentage: "",
                    issuesDate: "",
                },
                certificate2: {
                    name: "",
                    serialNo: "",
                    regNo: "",
                    rollNo: "",
                    grade: "",
                    percentage: "",
                    issuesDate: "",
                },
                certificate3: {
                    name: "",
                    serialNo: "",
                    regNo: "",
                    rollNo: "",
                    grade: "",
                    percentage: "",
                    issuesDate: "",
                },
                certificate4: {
                    name: "",
                    serialNo: "",
                    regNo: "",
                    rollNo: "",
                    grade: "",
                    percentage: "",
                    issuesDate: "",
                },
                certificate5: {
                    name: "",
                    serialNo: "",
                    regNo: "",
                    rollNo: "",
                    grade: "",
                    percentage: "",
                    issuesDate: "",
                },
            },
            // Work Experience Details
            workExp: {
                exp1: {
                    area: "",
                    orgType: "",
                    orgName: "",
                    post: "",
                    resp: "", // JOB Responsibilities
                    joinDate: "",
                    leaveDate: "",
                },
                exp2: {
                    area: "",
                    orgType: "",
                    orgName: "",
                    post: "",
                    resp: "", // JOB Responsibilities
                    joinDate: "",
                    leaveDate: "",
                },
                exp3: {
                    area: "",
                    orgType: "",
                    orgName: "",
                    post: "",
                    resp: "", // JOB Responsibilities
                    joinDate: "",
                    leaveDate: "",
                },
                exp4: {
                    area: "",
                    orgType: "",
                    orgName: "",
                    post: "",
                    resp: "", // JOB Responsibilities
                    joinDate: "",
                    leaveDate: "",
                },
                exp5: {
                    area: "",
                    orgType: "",
                    orgName: "",
                    post: "",
                    resp: "", // JOB Responsibilities
                    joinDate: "",
                    leaveDate: "",
                },
            },
            // Identification
            identity: {
                aadhaar: "",
                pan: "",
                voter: "",
                caste: {
                    serialNo: "",
                    issuesDate: "",
                    issuesBy: "",
                },
                residential: {
                    serialNo: "",
                    issuesDate: "",
                    issuesBy: "",
                },
                income: {
                    serialNo: "",
                    issuesDate: "",
                    issuesBy: "",
                },
            },
            // First Bank Details
            bank1: {
                name: "",
                account: "",
                branch: "",
                ifsc: "",
                customerName: "",
            },
            // Second Bank Details
            bank2: {
                name: "",
                account: "",
                branch: "",
                ifsc: "",
                customerName: "",
            },
            // First ATM Details
            atm1: {
                bankName: "",
                atmNo: "",
                expireDate: "",
                code: "",
                customerName: "",
            },
            // Second ATM Details
            atm2: {
                bankName: "",
                atmNo: "",
                expireDate: "",
                code: "",
                customerName: "",
            },
        },
        // Active User ID
        activeUserID: "",
        // Users Data
        userData: false,
        // Import Data Model
        isImportModalActive: false,
        // Upload User Json Files
        uploadUserJsonFiles: [],

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
    },

    methods: {

        /**
         * Save User Information Data
         */
        saveUserInfoData: function () {
            that = this;

            if (that.userObjData.firstName === "" && that.userObjData.firstName.trim() === "") {
                return notifier.warning('Please Fill First Name');
            } else if (that.userObjData.dob === "" && that.userObjData.dob.trim() === "") {
                return notifier.warning('Please Fill Date of Birth');
            } else if (that.userObjData.gender === "" && that.userObjData.gender.trim() === "") {
                return notifier.warning('Please Select Gender');
            } else {

                // Create User Unique ID
                var stdID = that.createUserID(that.userObjData.firstName, that.userObjData.dob, that.userObjData.gender);
                if (stdID !== false) {

                    // Set Extension Data in Vue Variable
                    this.setDataINVariable('extensionData__userData', 'userData').then(function (resp) {
                        if (resp === true) { // Promise Request
                            if (that.userData !== false) {
                                // console.log(that.userData);
                                if (that.userData.hasOwnProperty(stdID) === true) {
                                    // Update User Data
                                    var isUpdate = confirm('Are you sure? Update User Information.');
                                    if (isUpdate === true) {
                                        that.userData[stdID] = that.userObjData;
                                        that.setValueINExtensionStorage(that.userData, 'extensionData__userData');
                                        return notifier.success('User Information Updated. ID : ' + stdID);
                                    }
                                    return false;
                                } else {
                                    // Another User Data
                                    that.userData[stdID] = that.userObjData;
                                    that.setValueINExtensionStorage(that.userData, 'extensionData__userData');
                                    return notifier.success('User Information Saved. ID : ' + stdID);
                                }
                            } else {
                                notifier.alert('Error: User Data.');
                                console.error('Error: User Data.');
                            }
                        } else {
                            // First Time Store Data in Extension Storage
                            var d = {};
                            d[stdID] = that.userObjData;
                            that.setValueINExtensionStorage(d, 'extensionData__userData');
                            return notifier.success('User Information Saved. ID : ' + stdID);
                        }
                    }).catch(function (error) {
                        notifier.alert('User Data Not Fetch!');
                        console.error(error);
                    });

                } else {
                    notifier.alert('Create User Unique ID');
                    console.error('Create User Unique ID');
                }
            }
        },

        /**
         * Export User Data with User ID
         * @param {string} stdID 
         */
        exportUserData: function (stdID) {
            if (this.userData[stdID] !== undefined) {
                this.downloadJSON(stdID + ".json", this.userData[stdID]);
            }
            return false;
        },

        /**
         * Import User Data
         */
        importUserData: function () {
            that = this;

            if (this.uploadUserJsonFiles <= 0) {
                notifier.alert('Please Upload User Data Json Files.');
                return false;
            }

            this.uploadUserJsonFiles.forEach(function (file) {

                if (file.type === "application/json") {
                    const fr = new FileReader();

                    fr.onload = function (e) {
                        var data = JSON.parse(e.target.result);

                        // Required Fields: firstName, dob, gender
                        if (data.firstName === undefined || data.firstName === "" || data.firstName.trim() === "") {
                            return notifier.alert(file.name + ',<br>User First Name Key Not Found!');

                        } else if (data.dob === undefined || data.dob === "" || data.dob.trim() === "") {
                            return notifier.alert(file.name + ',<br>User Date of Birth Key Not Found!');

                        } else if (data.gender === undefined || data.gender === "" || data.gender.trim() === "") {
                            return notifier.alert(file.name + ',<br>User Gender Key Not Found!');

                        } else {

                            // Create User Unique ID
                            var stdID = that.createUserID(data.firstName, data.dob, data.gender);

                            if (stdID !== false) {
                                if (that.userData !== undefined) {
                                    if (that.userData.hasOwnProperty(stdID) === true) {
                                        // Update User Data
                                        var isUpdate = confirm('Update User Data. File : ' + file.name);
                                        if (isUpdate === true) {
                                            that.userData[stdID] = data;
                                            that.setValueINExtensionStorage(that.userData, 'extensionData__userData');
                                            return notifier.warning('User Data Updated.<br>ID : ' + stdID);
                                        }
                                        return;
                                    } else {
                                        // Another User Data
                                        if (that.userData === false) {
                                            var d = {};
                                            d[stdID] = data;
                                            that.userData = d;
                                            that.setValueINExtensionStorage(d, 'extensionData__userData');
                                        } else {
                                            that.userData[stdID] = data;
                                            that.setValueINExtensionStorage(that.userData, 'extensionData__userData');
                                        }
                                        return notifier.success('User Data Imported.<br>ID : ' + stdID);
                                    }
                                } else {
                                    notifier.alert('Error: User Data.');
                                    console.error('Error: User Data.');
                                }

                            } else {
                                notifier.alert('Create User Unique ID');
                                console.error('Create User Unique ID');
                            }
                        }
                    }
                    fr.readAsText(file);
                }
                return;
            });
        },

        deleteDropFile: function (index) {
            this.uploadUserJsonFiles.splice(index, 1)
        },

        /**
         * [DELETE] User Data with User ID
         * @param {string} stdID 
         */
        deleteUserData: function (stdID) {
            that = this;
            return function () {
                delete that.userData[stdID]; // Delete User Data
                $("#std-" + stdID).animate({ 'line-height': 0 }, 500).remove();
                // Update User Data
                that.setValueINExtensionStorage(that.userData, 'extensionData__userData');
                return notifier.success('User Information Deleted. ID : ' + stdID);
            }
        },

        /**
         * Clear Form Data [Add User Form]
         */
        clearAddUserFormData: function () {
            var defaultValues = {
                firstName: "",
                middleName: "",
                lastName: "",
                fatherName: "",
                motherName: "",
                dob: "", // Date of Birth
                gender: "M",
                religion: "",
                category: "",
                nationality: "",
                country: "",
                bodyMark1: "",
                bodyMark2: "",
                maritalStatus: "",
                // Permanent Address
                addressPermanent: {
                    address1: "",
                    address2: "",
                    address3: "",
                    city: "",
                    state: "",
                    pinCode: "",
                    mobile: "",
                    email: "",
                },
                // Address for Correspondence
                addressCorrespondence: {
                    address1: "",
                    address2: "",
                    address3: "",
                    city: "",
                    state: "",
                    pinCode: "",
                    mobile: "",
                    email: "",
                },
                // (High School) Educational Qualification
                highSchool: {
                    university: "",
                    passingSchool: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                    subjects: "",
                },
                // (Intermediate) Educational Qualification
                intermediate: {
                    university: "",
                    passingSchool: "",
                    certificateNo: "",
                    rollNo: "",
                    srNo: "",
                    passingYear: "",
                    maxMarks: "",
                    obtainedMarks: "",
                    percentage: "",
                    subjects: "",
                },
                // Other Educational Qualification Details
                otherEdu: {
                    degree1: {
                        name: "",
                        subjects: "",
                        university: "",
                        modeOfCourse: "",
                        certificateNo: "",
                        rollNo: "",
                        srNo: "",
                        passingYear: "",
                        maxMarks: "",
                        obtainedMarks: "",
                        percentage: "",
                    },
                    degree2: {
                        name: "",
                        subjects: "",
                        university: "",
                        modeOfCourse: "",
                        certificateNo: "",
                        rollNo: "",
                        srNo: "",
                        passingYear: "",
                        maxMarks: "",
                        obtainedMarks: "",
                        percentage: "",
                    },
                    degree3: {
                        name: "",
                        subjects: "",
                        university: "",
                        modeOfCourse: "",
                        certificateNo: "",
                        rollNo: "",
                        srNo: "",
                        passingYear: "",
                        maxMarks: "",
                        obtainedMarks: "",
                        percentage: "",
                    },
                    degree4: {
                        name: "",
                        subjects: "",
                        university: "",
                        modeOfCourse: "",
                        certificateNo: "",
                        rollNo: "",
                        srNo: "",
                        passingYear: "",
                        maxMarks: "",
                        obtainedMarks: "",
                        percentage: "",
                    },
                    degree5: {
                        name: "",
                        subjects: "",
                        university: "",
                        modeOfCourse: "",
                        certificateNo: "",
                        rollNo: "",
                        srNo: "",
                        passingYear: "",
                        maxMarks: "",
                        obtainedMarks: "",
                        percentage: "",
                    },
                },
                // Educational Certificate Details
                certificate: {
                    certificate1: {
                        name: "",
                        serialNo: "",
                        regNo: "",
                        rollNo: "",
                        grade: "",
                        percentage: "",
                        issuesDate: "",
                    },
                    certificate2: {
                        name: "",
                        serialNo: "",
                        regNo: "",
                        rollNo: "",
                        grade: "",
                        percentage: "",
                        issuesDate: "",
                    },
                    certificate3: {
                        name: "",
                        serialNo: "",
                        regNo: "",
                        rollNo: "",
                        grade: "",
                        percentage: "",
                        issuesDate: "",
                    },
                    certificate4: {
                        name: "",
                        serialNo: "",
                        regNo: "",
                        rollNo: "",
                        grade: "",
                        percentage: "",
                        issuesDate: "",
                    },
                    certificate5: {
                        name: "",
                        serialNo: "",
                        regNo: "",
                        rollNo: "",
                        grade: "",
                        percentage: "",
                        issuesDate: "",
                    },
                },
                // Work Experience Details
                workExp: {
                    exp1: {
                        area: "",
                        orgType: "",
                        orgName: "",
                        post: "",
                        resp: "", // JOB Responsibilities
                        joinDate: "",
                        leaveDate: "",
                    },
                    exp2: {
                        area: "",
                        orgType: "",
                        orgName: "",
                        post: "",
                        resp: "", // JOB Responsibilities
                        joinDate: "",
                        leaveDate: "",
                    },
                    exp3: {
                        area: "",
                        orgType: "",
                        orgName: "",
                        post: "",
                        resp: "", // JOB Responsibilities
                        joinDate: "",
                        leaveDate: "",
                    },
                    exp4: {
                        area: "",
                        orgType: "",
                        orgName: "",
                        post: "",
                        resp: "", // JOB Responsibilities
                        joinDate: "",
                        leaveDate: "",
                    },
                    exp5: {
                        area: "",
                        orgType: "",
                        orgName: "",
                        post: "",
                        resp: "", // JOB Responsibilities
                        joinDate: "",
                        leaveDate: "",
                    },
                },
                // Identification
                identity: {
                    aadhaar: "",
                    pan: "",
                    voter: "",
                    caste: {
                        serialNo: "",
                        issuesDate: "",
                        issuesBy: "",
                    },
                    residential: {
                        serialNo: "",
                        issuesDate: "",
                        issuesBy: "",
                    },
                    income: {
                        serialNo: "",
                        issuesDate: "",
                        issuesBy: "",
                    },
                },
                // First Bank Details
                bank1: {
                    name: "",
                    account: "",
                    branch: "",
                    ifsc: "",
                    customerName: "",
                },
                // Second Bank Details
                bank2: {
                    name: "",
                    account: "",
                    branch: "",
                    ifsc: "",
                    customerName: "",
                },
                // First ATM Details
                atm1: {
                    bankName: "",
                    atmNo: "",
                    expireDate: "",
                    code: "",
                    customerName: "",
                },
                // Second ATM Details
                atm2: {
                    bankName: "",
                    atmNo: "",
                    expireDate: "",
                    code: "",
                    customerName: "",
                },
            };
            this.userObjData = defaultValues;
        },

        /**
         * [UPDATE] User Data with User ID
         * @param {string} stdID 
         */
        updateUserData: function (stdID) {
            // console.log(this.userData[stdID]);
            if (this.userData[stdID] !== undefined) {
                var userData = this.userData[stdID];

                // Render Data
                this.userObjData.firstName = this.userData[stdID].firstName;
                this.userObjData.middleName = this.userData[stdID].middleName;
                this.userObjData.lastName = this.userData[stdID].lastName;
                this.userObjData.fatherName = this.userData[stdID].fatherName;
                this.userObjData.motherName = this.userData[stdID].motherName;
                this.userObjData.dob = this.userData[stdID].dob;
                this.userObjData.gender = this.userData[stdID].gender;
                this.userObjData.religion = this.userData[stdID].religion;
                this.userObjData.category = this.userData[stdID].category;
                this.userObjData.nationality = this.userData[stdID].nationality;
                this.userObjData.country = this.userData[stdID].country;
                this.userObjData.bodyMark1 = this.userData[stdID].bodyMark1;
                this.userObjData.bodyMark2 = this.userData[stdID].bodyMark2;
                this.userObjData.maritalStatus = (typeof userData.maritalStatus !== 'undefined') ? userData.maritalStatus : "";

                // Permanent Address Information
                this.userObjData.addressPermanent.address1 = this.userData[stdID].addressPermanent.address1;
                this.userObjData.addressPermanent.address2 = this.userData[stdID].addressPermanent.address2;
                this.userObjData.addressPermanent.address3 = this.userData[stdID].addressPermanent.address3;
                this.userObjData.addressPermanent.city = this.userData[stdID].addressPermanent.city;
                this.userObjData.addressPermanent.state = this.userData[stdID].addressPermanent.state;
                this.userObjData.addressPermanent.pinCode = this.userData[stdID].addressPermanent.pinCode;
                this.userObjData.addressPermanent.mobile = this.userData[stdID].addressPermanent.mobile;
                this.userObjData.addressPermanent.email = this.userData[stdID].addressPermanent.email;
                // Address for Correspondence
                this.userObjData.addressCorrespondence.address1 = this.userData[stdID].addressCorrespondence.address1;
                this.userObjData.addressCorrespondence.address2 = this.userData[stdID].addressCorrespondence.address2;
                this.userObjData.addressCorrespondence.address3 = this.userData[stdID].addressCorrespondence.address3;
                this.userObjData.addressCorrespondence.city = this.userData[stdID].addressCorrespondence.city;
                this.userObjData.addressCorrespondence.state = this.userData[stdID].addressCorrespondence.state;
                this.userObjData.addressCorrespondence.pinCode = this.userData[stdID].addressCorrespondence.pinCode;
                this.userObjData.addressCorrespondence.mobile = this.userData[stdID].addressCorrespondence.mobile;
                this.userObjData.addressCorrespondence.email = this.userData[stdID].addressCorrespondence.email;

                // (High School) Educational Qualification
                this.userObjData.highSchool.university = this.userData[stdID].highSchool.university;
                this.userObjData.highSchool.passingSchool = this.userData[stdID].highSchool.passingSchool;
                this.userObjData.highSchool.certificateNo = this.userData[stdID].highSchool.certificateNo;
                this.userObjData.highSchool.rollNo = this.userData[stdID].highSchool.rollNo;
                this.userObjData.highSchool.srNo = this.userData[stdID].highSchool.srNo;
                this.userObjData.highSchool.passingYear = this.userData[stdID].highSchool.passingYear;
                this.userObjData.highSchool.maxMarks = this.userData[stdID].highSchool.maxMarks;
                this.userObjData.highSchool.obtainedMarks = this.userData[stdID].highSchool.obtainedMarks;
                this.userObjData.highSchool.percentage = this.userData[stdID].highSchool.percentage;
                this.userObjData.highSchool.subjects = this.userData[stdID].highSchool.subjects;
                // (Intermediate) Educational Qualification
                this.userObjData.intermediate.university = this.userData[stdID].intermediate.university;
                this.userObjData.intermediate.passingSchool = this.userData[stdID].intermediate.passingSchool;
                this.userObjData.intermediate.certificateNo = this.userData[stdID].intermediate.certificateNo;
                this.userObjData.intermediate.rollNo = this.userData[stdID].intermediate.rollNo;
                this.userObjData.intermediate.srNo = this.userData[stdID].intermediate.srNo;
                this.userObjData.intermediate.passingYear = this.userData[stdID].intermediate.passingYear;
                this.userObjData.intermediate.maxMarks = this.userData[stdID].intermediate.maxMarks;
                this.userObjData.intermediate.obtainedMarks = this.userData[stdID].intermediate.obtainedMarks;
                this.userObjData.intermediate.percentage = this.userData[stdID].intermediate.percentage;
                this.userObjData.intermediate.subjects = this.userData[stdID].intermediate.subjects;

                // Other Educational Qualification Details : degree1
                this.userObjData.otherEdu.degree1.name = this.userData[stdID].otherEdu.degree1.name;
                this.userObjData.otherEdu.degree1.subjects = this.userData[stdID].otherEdu.degree1.subjects;
                this.userObjData.otherEdu.degree1.university = this.userData[stdID].otherEdu.degree1.university;
                this.userObjData.otherEdu.degree1.modeOfCourse = this.userData[stdID].otherEdu.degree1.modeOfCourse;
                this.userObjData.otherEdu.degree1.certificateNo = this.userData[stdID].otherEdu.degree1.certificateNo;
                this.userObjData.otherEdu.degree1.rollNo = this.userData[stdID].otherEdu.degree1.rollNo;
                this.userObjData.otherEdu.degree1.srNo = this.userData[stdID].otherEdu.degree1.srNo;
                this.userObjData.otherEdu.degree1.passingYear = this.userData[stdID].otherEdu.degree1.passingYear;
                this.userObjData.otherEdu.degree1.maxMarks = this.userData[stdID].otherEdu.degree1.maxMarks;
                this.userObjData.otherEdu.degree1.obtainedMarks = this.userData[stdID].otherEdu.degree1.obtainedMarks;
                this.userObjData.otherEdu.degree1.percentage = this.userData[stdID].otherEdu.degree1.percentage;
                // Other Educational Qualification Details : degree2
                this.userObjData.otherEdu.degree2.name = this.userData[stdID].otherEdu.degree2.name;
                this.userObjData.otherEdu.degree2.subjects = this.userData[stdID].otherEdu.degree2.subjects;
                this.userObjData.otherEdu.degree2.university = this.userData[stdID].otherEdu.degree2.university;
                this.userObjData.otherEdu.degree2.modeOfCourse = this.userData[stdID].otherEdu.degree2.modeOfCourse;
                this.userObjData.otherEdu.degree2.certificateNo = this.userData[stdID].otherEdu.degree2.certificateNo;
                this.userObjData.otherEdu.degree2.rollNo = this.userData[stdID].otherEdu.degree2.rollNo;
                this.userObjData.otherEdu.degree2.srNo = this.userData[stdID].otherEdu.degree2.srNo;
                this.userObjData.otherEdu.degree2.passingYear = this.userData[stdID].otherEdu.degree2.passingYear;
                this.userObjData.otherEdu.degree2.maxMarks = this.userData[stdID].otherEdu.degree2.maxMarks;
                this.userObjData.otherEdu.degree2.obtainedMarks = this.userData[stdID].otherEdu.degree2.obtainedMarks;
                this.userObjData.otherEdu.degree2.percentage = this.userData[stdID].otherEdu.degree2.percentage;
                // Other Educational Qualification Details : degree3
                this.userObjData.otherEdu.degree3.name = this.userData[stdID].otherEdu.degree3.name;
                this.userObjData.otherEdu.degree3.subjects = this.userData[stdID].otherEdu.degree3.subjects;
                this.userObjData.otherEdu.degree3.university = this.userData[stdID].otherEdu.degree3.university;
                this.userObjData.otherEdu.degree3.modeOfCourse = this.userData[stdID].otherEdu.degree3.modeOfCourse;
                this.userObjData.otherEdu.degree3.certificateNo = this.userData[stdID].otherEdu.degree3.certificateNo;
                this.userObjData.otherEdu.degree3.rollNo = this.userData[stdID].otherEdu.degree3.rollNo;
                this.userObjData.otherEdu.degree3.srNo = this.userData[stdID].otherEdu.degree3.srNo;
                this.userObjData.otherEdu.degree3.passingYear = this.userData[stdID].otherEdu.degree3.passingYear;
                this.userObjData.otherEdu.degree3.maxMarks = this.userData[stdID].otherEdu.degree3.maxMarks;
                this.userObjData.otherEdu.degree3.obtainedMarks = this.userData[stdID].otherEdu.degree3.obtainedMarks;
                this.userObjData.otherEdu.degree3.percentage = this.userData[stdID].otherEdu.degree3.percentage;
                // Other Educational Qualification Details : degree4
                this.userObjData.otherEdu.degree4.name = this.userData[stdID].otherEdu.degree4.name;
                this.userObjData.otherEdu.degree4.subjects = this.userData[stdID].otherEdu.degree4.subjects;
                this.userObjData.otherEdu.degree4.university = this.userData[stdID].otherEdu.degree4.university;
                this.userObjData.otherEdu.degree4.modeOfCourse = this.userData[stdID].otherEdu.degree4.modeOfCourse;
                this.userObjData.otherEdu.degree4.certificateNo = this.userData[stdID].otherEdu.degree4.certificateNo;
                this.userObjData.otherEdu.degree4.rollNo = this.userData[stdID].otherEdu.degree4.rollNo;
                this.userObjData.otherEdu.degree4.srNo = this.userData[stdID].otherEdu.degree4.srNo;
                this.userObjData.otherEdu.degree4.passingYear = this.userData[stdID].otherEdu.degree4.passingYear;
                this.userObjData.otherEdu.degree4.maxMarks = this.userData[stdID].otherEdu.degree4.maxMarks;
                this.userObjData.otherEdu.degree4.obtainedMarks = this.userData[stdID].otherEdu.degree4.obtainedMarks;
                this.userObjData.otherEdu.degree4.percentage = this.userData[stdID].otherEdu.degree4.percentage;
                // Other Educational Qualification Details : degree5
                this.userObjData.otherEdu.degree5.name = this.userData[stdID].otherEdu.degree5.name;
                this.userObjData.otherEdu.degree5.subjects = this.userData[stdID].otherEdu.degree5.subjects;
                this.userObjData.otherEdu.degree5.university = this.userData[stdID].otherEdu.degree5.university;
                this.userObjData.otherEdu.degree5.modeOfCourse = this.userData[stdID].otherEdu.degree5.modeOfCourse;
                this.userObjData.otherEdu.degree5.certificateNo = this.userData[stdID].otherEdu.degree5.certificateNo;
                this.userObjData.otherEdu.degree5.rollNo = this.userData[stdID].otherEdu.degree5.rollNo;
                this.userObjData.otherEdu.degree5.srNo = this.userData[stdID].otherEdu.degree5.srNo;
                this.userObjData.otherEdu.degree5.passingYear = this.userData[stdID].otherEdu.degree5.passingYear;
                this.userObjData.otherEdu.degree5.maxMarks = this.userData[stdID].otherEdu.degree5.maxMarks;
                this.userObjData.otherEdu.degree5.obtainedMarks = this.userData[stdID].otherEdu.degree5.obtainedMarks;
                this.userObjData.otherEdu.degree5.percentage = this.userData[stdID].otherEdu.degree5.percentage;

                // Educational Certificate Details : certificate1
                this.userObjData.certificate.certificate1.name = this.userData[stdID].certificate.certificate1.name;
                this.userObjData.certificate.certificate1.serialNo = this.userData[stdID].certificate.certificate1.serialNo;
                this.userObjData.certificate.certificate1.regNo = this.userData[stdID].certificate.certificate1.regNo;
                this.userObjData.certificate.certificate1.rollNo = this.userData[stdID].certificate.certificate1.rollNo;
                this.userObjData.certificate.certificate1.grade = this.userData[stdID].certificate.certificate1.grade;
                this.userObjData.certificate.certificate1.percentage = this.userData[stdID].certificate.certificate1.percentage;
                this.userObjData.certificate.certificate1.issuesDate = this.userData[stdID].certificate.certificate1.issuesDate;
                // Educational Certificate Details : certificate2
                this.userObjData.certificate.certificate2.name = this.userData[stdID].certificate.certificate2.name;
                this.userObjData.certificate.certificate2.serialNo = this.userData[stdID].certificate.certificate2.serialNo;
                this.userObjData.certificate.certificate2.regNo = this.userData[stdID].certificate.certificate2.regNo;
                this.userObjData.certificate.certificate2.rollNo = this.userData[stdID].certificate.certificate2.rollNo;
                this.userObjData.certificate.certificate2.grade = this.userData[stdID].certificate.certificate2.grade;
                this.userObjData.certificate.certificate2.percentage = this.userData[stdID].certificate.certificate2.percentage;
                this.userObjData.certificate.certificate2.issuesDate = this.userData[stdID].certificate.certificate2.issuesDate;
                // Educational Certificate Details : certificate3
                this.userObjData.certificate.certificate3.name = this.userData[stdID].certificate.certificate3.name;
                this.userObjData.certificate.certificate3.serialNo = this.userData[stdID].certificate.certificate3.serialNo;
                this.userObjData.certificate.certificate3.regNo = this.userData[stdID].certificate.certificate3.regNo;
                this.userObjData.certificate.certificate3.rollNo = this.userData[stdID].certificate.certificate3.rollNo;
                this.userObjData.certificate.certificate3.grade = this.userData[stdID].certificate.certificate3.grade;
                this.userObjData.certificate.certificate3.percentage = this.userData[stdID].certificate.certificate3.percentage;
                this.userObjData.certificate.certificate3.issuesDate = this.userData[stdID].certificate.certificate3.issuesDate;
                // Educational Certificate Details : certificate4
                this.userObjData.certificate.certificate4.name = this.userData[stdID].certificate.certificate4.name;
                this.userObjData.certificate.certificate4.serialNo = this.userData[stdID].certificate.certificate4.serialNo;
                this.userObjData.certificate.certificate4.regNo = this.userData[stdID].certificate.certificate4.regNo;
                this.userObjData.certificate.certificate4.rollNo = this.userData[stdID].certificate.certificate4.rollNo;
                this.userObjData.certificate.certificate4.grade = this.userData[stdID].certificate.certificate4.grade;
                this.userObjData.certificate.certificate4.percentage = this.userData[stdID].certificate.certificate4.percentage;
                this.userObjData.certificate.certificate4.issuesDate = this.userData[stdID].certificate.certificate4.issuesDate;
                // Educational Certificate Details : certificate5
                this.userObjData.certificate.certificate5.name = this.userData[stdID].certificate.certificate5.name;
                this.userObjData.certificate.certificate5.serialNo = this.userData[stdID].certificate.certificate5.serialNo;
                this.userObjData.certificate.certificate5.regNo = this.userData[stdID].certificate.certificate5.regNo;
                this.userObjData.certificate.certificate5.rollNo = this.userData[stdID].certificate.certificate5.rollNo;
                this.userObjData.certificate.certificate5.grade = this.userData[stdID].certificate.certificate5.grade;
                this.userObjData.certificate.certificate5.percentage = this.userData[stdID].certificate.certificate5.percentage;
                this.userObjData.certificate.certificate5.issuesDate = this.userData[stdID].certificate.certificate5.issuesDate;

                // Work Experience Details: exp1
                this.userObjData.workExp.exp1.area = this.userData[stdID].workExp.exp1.area;
                this.userObjData.workExp.exp1.orgType = this.userData[stdID].workExp.exp1.orgType;
                this.userObjData.workExp.exp1.orgName = this.userData[stdID].workExp.exp1.orgName;
                this.userObjData.workExp.exp1.post = this.userData[stdID].workExp.exp1.post;
                this.userObjData.workExp.exp1.resp = this.userData[stdID].workExp.exp1.resp;
                this.userObjData.workExp.exp1.joinDate = this.userData[stdID].workExp.exp1.joinDate;
                this.userObjData.workExp.exp1.leaveDate = this.userData[stdID].workExp.exp1.leaveDate;
                // Work Experience Details: exp2
                this.userObjData.workExp.exp2.area = this.userData[stdID].workExp.exp2.area;
                this.userObjData.workExp.exp2.orgType = this.userData[stdID].workExp.exp2.orgType;
                this.userObjData.workExp.exp2.orgName = this.userData[stdID].workExp.exp2.orgName;
                this.userObjData.workExp.exp2.post = this.userData[stdID].workExp.exp2.post;
                this.userObjData.workExp.exp2.resp = this.userData[stdID].workExp.exp2.resp;
                this.userObjData.workExp.exp2.joinDate = this.userData[stdID].workExp.exp2.joinDate;
                this.userObjData.workExp.exp2.leaveDate = this.userData[stdID].workExp.exp2.leaveDate;
                // Work Experience Details: exp3
                this.userObjData.workExp.exp3.area = this.userData[stdID].workExp.exp3.area;
                this.userObjData.workExp.exp3.orgType = this.userData[stdID].workExp.exp3.orgType;
                this.userObjData.workExp.exp3.orgName = this.userData[stdID].workExp.exp3.orgName;
                this.userObjData.workExp.exp3.post = this.userData[stdID].workExp.exp3.post;
                this.userObjData.workExp.exp3.resp = this.userData[stdID].workExp.exp3.resp;
                this.userObjData.workExp.exp3.joinDate = this.userData[stdID].workExp.exp3.joinDate;
                this.userObjData.workExp.exp3.leaveDate = this.userData[stdID].workExp.exp3.leaveDate;
                // Work Experience Details: exp4
                this.userObjData.workExp.exp4.area = this.userData[stdID].workExp.exp4.area;
                this.userObjData.workExp.exp4.orgType = this.userData[stdID].workExp.exp4.orgType;
                this.userObjData.workExp.exp4.orgName = this.userData[stdID].workExp.exp4.orgName;
                this.userObjData.workExp.exp4.post = this.userData[stdID].workExp.exp4.post;
                this.userObjData.workExp.exp4.resp = this.userData[stdID].workExp.exp4.resp;
                this.userObjData.workExp.exp4.joinDate = this.userData[stdID].workExp.exp4.joinDate;
                this.userObjData.workExp.exp4.leaveDate = this.userData[stdID].workExp.exp4.leaveDate;
                // Work Experience Details: exp5
                this.userObjData.workExp.exp5.area = this.userData[stdID].workExp.exp5.area;
                this.userObjData.workExp.exp5.orgType = this.userData[stdID].workExp.exp5.orgType;
                this.userObjData.workExp.exp5.orgName = this.userData[stdID].workExp.exp5.orgName;
                this.userObjData.workExp.exp5.post = this.userData[stdID].workExp.exp5.post;
                this.userObjData.workExp.exp5.resp = this.userData[stdID].workExp.exp5.resp;
                this.userObjData.workExp.exp5.joinDate = this.userData[stdID].workExp.exp5.joinDate;
                this.userObjData.workExp.exp5.leaveDate = this.userData[stdID].workExp.exp5.leaveDate;

                // Identification
                this.userObjData.identity.aadhaar = this.userData[stdID].identity.aadhaar;
                this.userObjData.identity.pan = this.userData[stdID].identity.pan;
                this.userObjData.identity.voter = this.userData[stdID].identity.voter;
                // Identification : caste
                this.userObjData.identity.caste.serialNo = this.userData[stdID].identity.caste.serialNo;
                this.userObjData.identity.caste.issuesDate = this.userData[stdID].identity.caste.issuesDate;
                this.userObjData.identity.caste.issuesBy = this.userData[stdID].identity.caste.issuesBy;
                // Identification : residential
                this.userObjData.identity.residential.serialNo = this.userData[stdID].identity.residential.serialNo;
                this.userObjData.identity.residential.issuesDate = this.userData[stdID].identity.residential.issuesDate;
                this.userObjData.identity.residential.issuesBy = this.userData[stdID].identity.residential.issuesBy;
                // Identification : income
                this.userObjData.identity.income.serialNo = this.userData[stdID].identity.income.serialNo;
                this.userObjData.identity.income.issuesDate = this.userData[stdID].identity.income.issuesDate;
                this.userObjData.identity.income.issuesBy = this.userData[stdID].identity.income.issuesBy;

                // First Bank Details
                this.userObjData.bank1.name = (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.name !== 'undefined') ? userData.bank1.name : "";
                this.userObjData.bank1.account = (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.account !== 'undefined') ? userData.bank1.account : "";
                this.userObjData.bank1.branch = (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.branch !== 'undefined') ? userData.bank1.branch : "";
                this.userObjData.bank1.ifsc = (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.ifsc !== 'undefined') ? userData.bank1.ifsc : "";
                this.userObjData.bank1.customerName = (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.customerName !== 'undefined') ? userData.bank1.customerName : "";
                // Second Bank Details
                this.userObjData.bank2.name = (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.name !== 'undefined') ? userData.bank2.name : "";
                this.userObjData.bank2.account = (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.account !== 'undefined') ? userData.bank2.account : "";
                this.userObjData.bank2.branch = (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.branch !== 'undefined') ? userData.bank2.branch : "";
                this.userObjData.bank2.ifsc = (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.ifsc !== 'undefined') ? userData.bank2.ifsc : "";
                this.userObjData.bank2.customerName = (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.customerName !== 'undefined') ? userData.bank2.customerName : "";

                // First ATM Details
                this.userObjData.atm1.bankName = (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.bankName !== 'undefined') ? userData.atm1.bankName : "";
                this.userObjData.atm1.atmNo = (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.atmNo !== 'undefined') ? userData.atm1.atmNo : "";
                this.userObjData.atm1.expireDate = (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.expireDate !== 'undefined') ? userData.atm1.expireDate : "";
                this.userObjData.atm1.code = (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.code !== 'undefined') ? userData.atm1.code : "";
                this.userObjData.atm1.customerName = (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.customerName !== 'undefined') ? userData.atm1.customerName : "";
                // Second ATM Details
                this.userObjData.atm2.bankName = (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.bankName !== 'undefined') ? userData.atm2.bankName : "";
                this.userObjData.atm2.atmNo = (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.atmNo !== 'undefined') ? userData.atm2.atmNo : "";
                this.userObjData.atm2.expireDate = (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.expireDate !== 'undefined') ? userData.atm2.expireDate : "";
                this.userObjData.atm2.code = (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.code !== 'undefined') ? userData.atm2.code : "";
                this.userObjData.atm2.customerName = (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.customerName !== 'undefined') ? userData.atm2.customerName : "";

                // Active/Open Tab [Add New User]
                this.activeTab = 2;
            }
        },

        /**
         * Set Active User Data For Autocomplete
         * @param {string} stdID 
         */
        setActiveUserDataForAutocomplete: function (stdID) {
            // console.log(stdID);
            if (this.userData[stdID] !== undefined) {

                if (typeof (this.defaultAutoKeys) === "string") {
                    this.defaultAutoKeys = JSON.parse(this.defaultAutoKeys);
                }

                if (typeof (this.defaultAutoKeys) === "object") {
                    var userData = this.userData[stdID];
                    var autocompleteData = [
                        {
                            label: this.defaultAutoKeys["Full Name"],
                            value: this.joinUserName(this.userData[stdID].firstName, this.userData[stdID].middleName, this.userData[stdID].lastName)
                        },
                        {
                            label: this.defaultAutoKeys["First Name"],
                            value: this.dataCustomize(this.userData[stdID].firstName, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Middle Name"],
                            value: this.dataCustomize(this.userData[stdID].middleName, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Last Name"],
                            value: this.dataCustomize(this.userData[stdID].lastName, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Father Name"],
                            value: this.dataCustomize(this.userData[stdID].fatherName, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Mother Name"],
                            value: this.dataCustomize(this.userData[stdID].motherName, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Date of Birth"],
                            value: this.userData[stdID].dob
                        },
                        {
                            label: this.defaultAutoKeys["Gender"],
                            value: (this.userData[stdID].gender === "M") ? "MALE" : "FEMALE"
                        },
                        {
                            label: this.defaultAutoKeys["Religion"],
                            value: this.dataCustomize(this.userData[stdID].religion, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Category"],
                            value: this.dataCustomize(this.userData[stdID].category, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Nationality"],
                            value: this.dataCustomize(this.userData[stdID].nationality, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Country"],
                            value: this.dataCustomize(this.userData[stdID].country, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Body Mark1"],
                            value: this.dataCustomize(this.userData[stdID].bodyMark1, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Body Mark2"],
                            value: this.dataCustomize(this.userData[stdID].bodyMark2, ["trim", "uppercase"])
                        },
                        {
                            label: this.defaultAutoKeys["Marital Status"],
                            value: (typeof userData.maritalStatus !== 'undefined') ? userData.maritalStatus : ""
                        },

                        // Permanent Address Information
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Address1"],
                            value: this.userData[stdID].addressPermanent.address1
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Address2"],
                            value: this.userData[stdID].addressPermanent.address2
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Address3"],
                            value: this.userData[stdID].addressPermanent.address3
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["City"],
                            value: this.userData[stdID].addressPermanent.city
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["State"],
                            value: this.userData[stdID].addressPermanent.state
                        },
                        // Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post.
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["PinCode"],
                            value: this.userData[stdID].addressPermanent.pinCode
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["PinCode Num"],
                            value: this.userData[stdID].addressPermanent.pinCode
                        },
                        // india mobile number : +91
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Mobile"],
                            value: this.userData[stdID].addressPermanent.mobile
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Mobile Num"],
                            value: this.userData[stdID].addressPermanent.mobile
                        },
                        {
                            label: this.defaultAutoKeys["PermanentAddress"]["Email"],
                            value: this.userData[stdID].addressPermanent.email
                        },

                        // Correspondence Address Information
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Address1"],
                            value: this.userData[stdID].addressCorrespondence.address1
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Address2"],
                            value: this.userData[stdID].addressCorrespondence.address2
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Address3"],
                            value: this.userData[stdID].addressCorrespondence.address3
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["City"],
                            value: this.userData[stdID].addressCorrespondence.city
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["State"],
                            value: this.userData[stdID].addressCorrespondence.state
                        },
                        // Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post.
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["PinCode"],
                            value: this.userData[stdID].addressCorrespondence.pinCode
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["PinCode Num"],
                            value: this.userData[stdID].addressCorrespondence.pinCode
                        },
                        // india mobile number : +91
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Mobile"],
                            value: this.userData[stdID].addressCorrespondence.mobile
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Mobile Num"],
                            value: this.userData[stdID].addressCorrespondence.mobile
                        },
                        {
                            label: this.defaultAutoKeys["CorrespondenceAddress"]["Email"],
                            value: this.userData[stdID].addressCorrespondence.email
                        },

                        // (High School) Educational Qualification
                        {
                            label: this.defaultAutoKeys["HighSchool"]["University"],
                            value: this.userData[stdID].highSchool.university
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Passing School"],
                            value: this.userData[stdID].highSchool.passingSchool
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Certificate No"],
                            value: this.userData[stdID].highSchool.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Roll No"],
                            value: this.userData[stdID].highSchool.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Sr No"],
                            value: this.userData[stdID].highSchool.srNo
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Passing Year"],
                            value: this.userData[stdID].highSchool.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Max Marks"],
                            value: this.userData[stdID].highSchool.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Obtained Marks"],
                            value: this.userData[stdID].highSchool.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Percentage"],
                            value: this.userData[stdID].highSchool.percentage
                        },
                        {
                            label: this.defaultAutoKeys["HighSchool"]["Subjects"],
                            value: this.userData[stdID].highSchool.subjects
                        },

                        // (Intermediate) Educational Qualification
                        {
                            label: this.defaultAutoKeys["Intermediate"]["University"],
                            value: this.userData[stdID].intermediate.university
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Passing School"],
                            value: this.userData[stdID].intermediate.passingSchool
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Certificate No"],
                            value: this.userData[stdID].intermediate.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Roll No"],
                            value: this.userData[stdID].intermediate.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Sr No"],
                            value: this.userData[stdID].intermediate.srNo
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Passing Year"],
                            value: this.userData[stdID].intermediate.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Max Marks"],
                            value: this.userData[stdID].intermediate.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Obtained Marks"],
                            value: this.userData[stdID].intermediate.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Percentage"],
                            value: this.userData[stdID].intermediate.percentage
                        },
                        {
                            label: this.defaultAutoKeys["Intermediate"]["Subjects"],
                            value: this.userData[stdID].intermediate.subjects
                        },

                        // [degree1]: Other Educational Qualification Details
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Name"],
                            value: this.userData[stdID].otherEdu.degree1.name
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Subjects"],
                            value: this.userData[stdID].otherEdu.degree1.subjects
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["University"],
                            value: this.userData[stdID].otherEdu.degree1.university
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Mode Of Course"],
                            value: this.userData[stdID].otherEdu.degree1.modeOfCourse
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Certificate No"],
                            value: this.userData[stdID].otherEdu.degree1.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Roll No"],
                            value: this.userData[stdID].otherEdu.degree1.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Sr No"],
                            value: this.userData[stdID].otherEdu.degree1.srNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Passing Year"],
                            value: this.userData[stdID].otherEdu.degree1.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Max Marks"],
                            value: this.userData[stdID].otherEdu.degree1.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Obtained Marks"],
                            value: this.userData[stdID].otherEdu.degree1.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg1"]["Percentage"],
                            value: this.userData[stdID].otherEdu.degree1.percentage
                        },
                        // [degree2]: Other Educational Qualification Details
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Name"],
                            value: this.userData[stdID].otherEdu.degree2.name
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Subjects"],
                            value: this.userData[stdID].otherEdu.degree2.subjects
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["University"],
                            value: this.userData[stdID].otherEdu.degree2.university
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Mode Of Course"],
                            value: this.userData[stdID].otherEdu.degree2.modeOfCourse
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Certificate No"],
                            value: this.userData[stdID].otherEdu.degree2.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Roll No"],
                            value: this.userData[stdID].otherEdu.degree2.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Sr No"],
                            value: this.userData[stdID].otherEdu.degree2.srNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Passing Year"],
                            value: this.userData[stdID].otherEdu.degree2.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Max Marks"],
                            value: this.userData[stdID].otherEdu.degree2.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Obtained Marks"],
                            value: this.userData[stdID].otherEdu.degree2.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg2"]["Percentage"],
                            value: this.userData[stdID].otherEdu.degree2.percentage
                        },
                        // [degree3]: Other Educational Qualification Details
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Name"],
                            value: this.userData[stdID].otherEdu.degree3.name
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Subjects"],
                            value: this.userData[stdID].otherEdu.degree3.subjects
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["University"],
                            value: this.userData[stdID].otherEdu.degree3.university
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Mode Of Course"],
                            value: this.userData[stdID].otherEdu.degree3.modeOfCourse
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Certificate No"],
                            value: this.userData[stdID].otherEdu.degree3.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Roll No"],
                            value: this.userData[stdID].otherEdu.degree3.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Sr No"],
                            value: this.userData[stdID].otherEdu.degree3.srNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Passing Year"],
                            value: this.userData[stdID].otherEdu.degree3.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Max Marks"],
                            value: this.userData[stdID].otherEdu.degree3.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Obtained Marks"],
                            value: this.userData[stdID].otherEdu.degree3.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg3"]["Percentage"],
                            value: this.userData[stdID].otherEdu.degree3.percentage
                        },
                        // [degree4]: Other Educational Qualification Details
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Name"],
                            value: this.userData[stdID].otherEdu.degree4.name
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Subjects"],
                            value: this.userData[stdID].otherEdu.degree4.subjects
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["University"],
                            value: this.userData[stdID].otherEdu.degree4.university
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Mode Of Course"],
                            value: this.userData[stdID].otherEdu.degree4.modeOfCourse
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Certificate No"],
                            value: this.userData[stdID].otherEdu.degree4.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Roll No"],
                            value: this.userData[stdID].otherEdu.degree4.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Sr No"],
                            value: this.userData[stdID].otherEdu.degree4.srNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Passing Year"],
                            value: this.userData[stdID].otherEdu.degree4.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Max Marks"],
                            value: this.userData[stdID].otherEdu.degree4.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Obtained Marks"],
                            value: this.userData[stdID].otherEdu.degree4.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg4"]["Percentage"],
                            value: this.userData[stdID].otherEdu.degree4.percentage
                        },
                        // [degree5]: Other Educational Qualification Details
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Name"],
                            value: this.userData[stdID].otherEdu.degree5.name
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Subjects"],
                            value: this.userData[stdID].otherEdu.degree5.subjects
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["University"],
                            value: this.userData[stdID].otherEdu.degree5.university
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Mode Of Course"],
                            value: this.userData[stdID].otherEdu.degree5.modeOfCourse
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Certificate No"],
                            value: this.userData[stdID].otherEdu.degree5.certificateNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Roll No"],
                            value: this.userData[stdID].otherEdu.degree5.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Sr No"],
                            value: this.userData[stdID].otherEdu.degree5.srNo
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Passing Year"],
                            value: this.userData[stdID].otherEdu.degree5.passingYear
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Max Marks"],
                            value: this.userData[stdID].otherEdu.degree5.maxMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Obtained Marks"],
                            value: this.userData[stdID].otherEdu.degree5.obtainedMarks
                        },
                        {
                            label: this.defaultAutoKeys["OtherEdu"]["Deg5"]["Percentage"],
                            value: this.userData[stdID].otherEdu.degree5.percentage
                        },

                        // [certificate1]: Educational Certificate Details
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Name"],
                            value: this.userData[stdID].certificate.certificate1.name
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Serial No"],
                            value: this.userData[stdID].certificate.certificate1.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Registration No"],
                            value: this.userData[stdID].certificate.certificate1.regNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Roll No"],
                            value: this.userData[stdID].certificate.certificate1.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Grade"],
                            value: this.userData[stdID].certificate.certificate1.grade
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Percentage"],
                            value: this.userData[stdID].certificate.certificate1.percentage
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert1"]["Issues Date"],
                            value: this.userData[stdID].certificate.certificate1.issuesDate
                        },
                        // [certificate2]: Educational Certificate Details
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Name"],
                            value: this.userData[stdID].certificate.certificate2.name
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Serial No"],
                            value: this.userData[stdID].certificate.certificate2.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Registration No"],
                            value: this.userData[stdID].certificate.certificate2.regNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Roll No"],
                            value: this.userData[stdID].certificate.certificate2.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Grade"],
                            value: this.userData[stdID].certificate.certificate2.grade
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Percentage"],
                            value: this.userData[stdID].certificate.certificate2.percentage
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert2"]["Issues Date"],
                            value: this.userData[stdID].certificate.certificate2.issuesDate
                        },
                        // [certificate3]: Educational Certificate Details
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Name"],
                            value: this.userData[stdID].certificate.certificate3.name
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Serial No"],
                            value: this.userData[stdID].certificate.certificate3.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Registration No"],
                            value: this.userData[stdID].certificate.certificate3.regNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Roll No"],
                            value: this.userData[stdID].certificate.certificate3.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Grade"],
                            value: this.userData[stdID].certificate.certificate3.grade
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Percentage"],
                            value: this.userData[stdID].certificate.certificate3.percentage
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert3"]["Issues Date"],
                            value: this.userData[stdID].certificate.certificate3.issuesDate
                        },
                        // [certificate4]: Educational Certificate Details
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Name"],
                            value: this.userData[stdID].certificate.certificate4.name
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Serial No"],
                            value: this.userData[stdID].certificate.certificate4.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Registration No"],
                            value: this.userData[stdID].certificate.certificate4.regNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Roll No"],
                            value: this.userData[stdID].certificate.certificate4.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Grade"],
                            value: this.userData[stdID].certificate.certificate4.grade
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Percentage"],
                            value: this.userData[stdID].certificate.certificate4.percentage
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert4"]["Issues Date"],
                            value: this.userData[stdID].certificate.certificate4.issuesDate
                        },
                        // [certificate5]: Educational Certificate Details
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Name"],
                            value: this.userData[stdID].certificate.certificate5.name
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Serial No"],
                            value: this.userData[stdID].certificate.certificate5.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Registration No"],
                            value: this.userData[stdID].certificate.certificate5.regNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Roll No"],
                            value: this.userData[stdID].certificate.certificate5.rollNo
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Grade"],
                            value: this.userData[stdID].certificate.certificate5.grade
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Percentage"],
                            value: this.userData[stdID].certificate.certificate5.percentage
                        },
                        {
                            label: this.defaultAutoKeys["EduCert"]["Cert5"]["Issues Date"],
                            value: this.userData[stdID].certificate.certificate5.issuesDate
                        },

                        // [exp1]: Work Experience Details
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Area of Work"],
                            value: this.userData[stdID].workExp.exp1.area
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Organization Nature"],
                            value: this.userData[stdID].workExp.exp1.orgType
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Organization Name"],
                            value: this.userData[stdID].workExp.exp1.orgName
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Post"],
                            value: this.userData[stdID].workExp.exp1.post
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Job Responsibilities"],
                            value: this.userData[stdID].workExp.exp1.resp
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Join Date"],
                            value: this.userData[stdID].workExp.exp1.joinDate
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp1"]["Leave Date"],
                            value: this.userData[stdID].workExp.exp1.leaveDate
                        },
                        // [exp2]: Work Experience Details
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Area of Work"],
                            value: this.userData[stdID].workExp.exp2.area
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Organization Nature"],
                            value: this.userData[stdID].workExp.exp2.orgType
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Organization Name"],
                            value: this.userData[stdID].workExp.exp2.orgName
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Post"],
                            value: this.userData[stdID].workExp.exp2.post
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Job Responsibilities"],
                            value: this.userData[stdID].workExp.exp2.resp
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Join Date"],
                            value: this.userData[stdID].workExp.exp2.joinDate
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp2"]["Leave Date"],
                            value: this.userData[stdID].workExp.exp2.leaveDate
                        },
                        // [exp3]: Work Experience Details
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Area of Work"],
                            value: this.userData[stdID].workExp.exp3.area
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Organization Nature"],
                            value: this.userData[stdID].workExp.exp3.orgType
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Organization Name"],
                            value: this.userData[stdID].workExp.exp3.orgName
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Post"],
                            value: this.userData[stdID].workExp.exp3.post
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Job Responsibilities"],
                            value: this.userData[stdID].workExp.exp3.resp
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Join Date"],
                            value: this.userData[stdID].workExp.exp3.joinDate
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp3"]["Leave Date"],
                            value: this.userData[stdID].workExp.exp3.leaveDate
                        },
                        // [exp4]: Work Experience Details
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Area of Work"],
                            value: this.userData[stdID].workExp.exp4.area
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Organization Nature"],
                            value: this.userData[stdID].workExp.exp4.orgType
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Organization Name"],
                            value: this.userData[stdID].workExp.exp4.orgName
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Post"],
                            value: this.userData[stdID].workExp.exp4.post
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Job Responsibilities"],
                            value: this.userData[stdID].workExp.exp4.resp
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Join Date"],
                            value: this.userData[stdID].workExp.exp4.joinDate
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp4"]["Leave Date"],
                            value: this.userData[stdID].workExp.exp4.leaveDate
                        },
                        // [exp5]: Work Experience Details
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Area of Work"],
                            value: this.userData[stdID].workExp.exp5.area
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Organization Nature"],
                            value: this.userData[stdID].workExp.exp5.orgType
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Organization Name"],
                            value: this.userData[stdID].workExp.exp5.orgName
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Post"],
                            value: this.userData[stdID].workExp.exp5.post
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Job Responsibilities"],
                            value: this.userData[stdID].workExp.exp5.resp
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Join Date"],
                            value: this.userData[stdID].workExp.exp5.joinDate
                        },
                        {
                            label: this.defaultAutoKeys["WorkExp"]["Exp5"]["Leave Date"],
                            value: this.userData[stdID].workExp.exp5.leaveDate
                        },

                        // Identification
                        // Aadhaar is a 12-digit unique identity number
                        {
                            label: this.defaultAutoKeys["Identity"]["aadhaar"]["Aadhaar"],
                            value: this.userData[stdID].identity.aadhaar
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["aadhaar"]["Aadhaar Num"],
                            value: this.userData[stdID].identity.aadhaar
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["pan"]["Pan"],
                            value: this.userData[stdID].identity.pan
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["voter"]["voter"],
                            value: this.userData[stdID].identity.voter
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["caste"]["Serial No"],
                            value: this.userData[stdID].identity.caste.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["caste"]["Issues Date"],
                            value: this.userData[stdID].identity.caste.issuesDate
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["caste"]["Issues By"],
                            value: this.userData[stdID].identity.caste.issuesBy
                        },
                        // Residential
                        {
                            label: this.defaultAutoKeys["Identity"]["residential"]["Serial No"],
                            value: this.userData[stdID].identity.residential.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["residential"]["Issues Date"],
                            value: this.userData[stdID].identity.residential.issuesDate
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["residential"]["Issues By"],
                            value: this.userData[stdID].identity.residential.issuesBy
                        },
                        // Income
                        {
                            label: this.defaultAutoKeys["Identity"]["income"]["Serial No"],
                            value: this.userData[stdID].identity.income.serialNo
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["income"]["Issues Date"],
                            value: this.userData[stdID].identity.income.issuesDate
                        },
                        {
                            label: this.defaultAutoKeys["Identity"]["income"]["Issues By"],
                            value: this.userData[stdID].identity.income.issuesBy
                        },
                        // First Bank Details
                        {
                            label: this.defaultAutoKeys["Bank1"]["Name"],
                            value: (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.name !== 'undefined') ? userData.bank1.name : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank1"]["Account No"],
                            value: (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.account !== 'undefined') ? userData.bank1.account : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank1"]["Branch"],
                            value: (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.branch !== 'undefined') ? userData.bank1.branch : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank1"]["IFSC"],
                            value: (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.ifsc !== 'undefined') ? userData.bank1.ifsc : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank1"]["Customer Name"],
                            value: (typeof userData.bank1 !== 'undefined' && typeof userData.bank1.customerName !== 'undefined') ? userData.bank1.customerName : ""
                        },
                        // Second Bank Details
                        {
                            label: this.defaultAutoKeys["Bank2"]["Name"],
                            value: (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.name !== 'undefined') ? userData.bank2.name : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank2"]["Account No"],
                            value: (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.account !== 'undefined') ? userData.bank2.account : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank2"]["Branch"],
                            value: (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.branch !== 'undefined') ? userData.bank2.branch : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank2"]["IFSC"],
                            value: (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.ifsc !== 'undefined') ? userData.bank2.ifsc : ""
                        },
                        {
                            label: this.defaultAutoKeys["Bank2"]["Customer Name"],
                            value: (typeof userData.bank2 !== 'undefined' && typeof userData.bank2.customerName !== 'undefined') ? userData.bank2.customerName : ""
                        },
                        // First ATM Details
                        {
                            label: this.defaultAutoKeys["ATM1"]["Bank Name"],
                            value: (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.bankName !== 'undefined') ? userData.atm1.bankName : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM1"]["ATM No"],
                            value: (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.atmNo !== 'undefined') ? userData.atm1.atmNo : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM1"]["Expire Date"],
                            value: (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.expireDate !== 'undefined') ? userData.atm1.expireDate : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM1"]["Code"],
                            value: (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.code !== 'undefined') ? userData.atm1.code : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM1"]["Customer Name"],
                            value: (typeof userData.atm1 !== 'undefined' && typeof userData.atm1.customerName !== 'undefined') ? userData.atm1.customerName : ""
                        },
                        // Second ATM Details
                        {
                            label: this.defaultAutoKeys["ATM2"]["Bank Name"],
                            value: (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.bankName !== 'undefined') ? userData.atm2.bankName : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM2"]["ATM No"],
                            value: (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.atmNo !== 'undefined') ? userData.atm2.atmNo : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM2"]["Expire Date"],
                            value: (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.expireDate !== 'undefined') ? userData.atm2.expireDate : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM2"]["Code"],
                            value: (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.code !== 'undefined') ? userData.atm2.code : ""
                        },
                        {
                            label: this.defaultAutoKeys["ATM2"]["Customer Name"],
                            value: (typeof userData.atm2 !== 'undefined' && typeof userData.atm2.customerName !== 'undefined') ? userData.atm2.customerName : ""
                        },

                    ];
                    // console.log(autocompleteData);
                    this.setValueINExtensionStorage(autocompleteData, 'extensionData__activeUserFillData');
                }
            }
        },

        /**
         * Set Active User Data in Storage
         * @param {string} stdID 
         */
        setActiveUserData: function (stdID) {
            if (this.userData[stdID] !== undefined) {
                this.setValueINExtensionStorage(this.userData[stdID], 'extensionData__activeUserData');
            }
        },

        /**
         * [PRIVATE] Download JSON Data in File
         * @param: {string} filename
         * @param: {object/string} data
         */
        downloadJSON: function (filename, data) {

            if (!data) {
                console.error('Please Set Data.')
                return;
            }

            if (!filename) filename = 'user_data.json'

            if (typeof data === "object") {
                data = JSON.stringify(data, undefined, 4)
            }

            var blob = new Blob([data], { type: 'text/json' }),
                e = document.createEvent('MouseEvents'),
                a = document.createElement('a')

            a.download = filename
            a.href = window.URL.createObjectURL(blob)
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
        },

        /**
         * [PRIVATE] Data Customize
         * @param {*} data 
         * @param {array} rules ["trim", "uppercase"]
         */
        dataCustomize: function (data, rules) {
            // console.log(data);
            // console.log(rules);
            if (data !== undefined && data !== null) {
                if (rules !== undefined) {

                    // [RULE]: Trim
                    if (rules.indexOf("trim") >= 0) {
                        data = data.trim();
                    }

                    // [RULE]: UpperCase
                    if (rules.indexOf("uppercase") >= 0) {
                        data = data.toUpperCase();
                    }
                }
                return data;
            }
        },

        /**
         * [PRIVATE] Join User Name
         * @param {string} first 
         * @param {string} middle 
         * @param {string} last 
         */
        joinUserName: function (first, middle, last) {
            var fullName = "";
            if (first !== undefined) {
                first = first.trim();
                first = first.toUpperCase();

                fullName = first;

                if (middle !== undefined && middle !== "") {
                    middle = middle.trim();
                    middle = middle.toUpperCase();
                    fullName = fullName + " " + middle;
                }

                if (last !== undefined && last !== "") {
                    last = last.trim();
                    last = last.toUpperCase();
                    fullName = fullName + " " + last;
                }
            }
            return fullName.trim();
        },

        /**
         * [PRIVATE] Create User Unique ID
         * @param {string} firstName 
         * @param {string} dob 
         * @param {string} gender 
         * @returns {string} unique id
         */
        createUserID: function (firstName, dob, gender) {
            if (firstName === "" && firstName.trim() === "") {
                return false;
            } else if (dob === "" && dob.trim() === "") {
                return false;
            } else if (gender === "" && gender.trim() === "") {
                return false;
            } else {
                return firstName.toLowerCase() + "_" + gender.toLowerCase() + "" + dob.replace(/\//g, "");
            }
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

    watch: {
        // Application Status
        appStatus: function (newValue) {
            // console.log(newValue);
            this.setValueINExtensionStorage(newValue, 'extensionData__appStatus');

            /**
             * Set Badge Text in Google Chrome Status Bar
             */
            if (newValue === true) {
                chrome.browserAction.setIcon({ path: "img/icon32.png" });
            } else {
                chrome.browserAction.setIcon({ path: "img/icon_disable.png" });
            }
        },

        // Active User ID
        activeUserID: function (newValue) {
            // console.log(newValue);
            this.setValueINExtensionStorage(newValue, 'extensionData__activeUserID');
            // Set Active User Data
            this.setActiveUserDataForAutocomplete(newValue);
            this.setActiveUserData(newValue);
        },
    },

    mounted: function () {
        that = this;

        // Application Status Value Set in Vue JS Variable
        this.setDataINVariable('extensionData__appStatus', 'appStatus');

        // User All Data
        this.setDataINVariable('extensionData__userData', 'userData');

        // New Autocomplete Keys
        this.setDataINVariable('extensionData__newAutocompleteKeys', 'defaultAutoKeys').then(function () {
            // Active User ID
            that.setDataINVariable('extensionData__activeUserID', 'activeUserID');
        }).catch(function (error) {
            console.error(error);
        });
    }
});