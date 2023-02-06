function validateAndGetFormData() {
                var empIdVar = $("#empId").val();
                if (empIdVar === "") {
                    alert("Employee ID Required Value");
                    $("#empId").focus();
                    return "";
                }
                var empNameVar = $("#empName").val();
                if (empNameVar === "") {
                    alert("Employee Name is Required Value");
                    $("#empName").focus();
                    return "";
                }
                var empEmailVar = $("#empEmail").val();
                if (empEmailVar === "") {
                    alert("Employee Email is Required Value");
                    $("#empEmail").focus();
                    return "";
                }

                var empSalaryVar = $("#empSalary").val();
                if (empSalaryVar === "") {
                    alert("Employee Salary is Required Value");
                    $("#empSalary").focus();
                    return "";
                }

                var empHraVar = $("#hra").val();
                if (empHraVar === "") {
                    alert("Employee HRA is Required Value");
                    $("#hra").focus();
                    return "";
                }

                var empDeductionVar = $("#deduction").val();
                if (empDeductionVar === "") {
                    alert("Employee Deduction is Required Value");
                    $("#deduction").focus();
                    return "";
                }

                var empDaVar = $("#da").val();
                if (empDaVar === "") {
                    alert("Employee DA is Required Value");
                    $("#da").focus();
                    return "";
                }

                var jsonStrObj = {
                    empId: empIdVar,
                    empName: empNameVar,
                    empEmail: empEmailVar,
                    empSalary: empSalaryVar,
                    empHra: empHraVar,
                    empDeduction: empDeductionVar,
                    empDA: empDaVar
                };
                return JSON.stringify(jsonStrObj);
            }
//THESE FUNCTION IS ALREADY INCLUDED IN JPDB LIBRARY
// This method is used to create PUT Json request.
//            function createPUTRequest(connToken, jsonObj, dbName, relName) {
//                var putRequest = "{\n"
//                        + "\"token\" : \""
//                        + connToken
//                        + "\","
//                        + "\"dbName\": \""
//                        + dbName
//                        + "\",\n" + "\"cmd\" : \"PUT\",\n"
//                        + "\"rel\" : \""
//                        + relName + "\","
//                        + "\"jsonStr\": \n"
//                        + jsonObj
//                        + "\n"
//                        + "}";
//                return putRequest;
//            }
//
//            function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
//                var url = dbBaseUrl + apiEndPointUrl;
//                var jsonObj;
//                $.post(url, reqString, function (result) {
//                    jsonObj = JSON.parse(result);
//                }).fail(function (result) {
//                    var dataJsonObj = result.responseText;
//                    jsonObj = JSON.parse(dataJsonObj);
//                });
//                return jsonObj;
//            }

            function resetForm() {
                $("#empId").val("");
                $("#empName").val("");
                $("#empEmail").val("");
                $("#empSalary").val("");
                $("#hra").val("");
                $("#da").val("");
                $("#deduction").val("");
                $("#empId").focus();
            }
            function saveEmployee() {
                var jsonStr = validateAndGetFormData();
                if (jsonStr === "") {
                    save=true
                    return;
                }
                var putReqStr = createPUTRequest("90932667|-31949276320036676|90954502",
                        jsonStr, "EMPOYEE", "EMPOYEE-REL");
                console.log(putReqStr)
                alert(putReqStr);
                jQuery.ajaxSetup({async: false});
                var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
                jQuery.ajaxSetup({async: true});
                alert(JSON.stringify(resultObj));
                resetForm();
            }