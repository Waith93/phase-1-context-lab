/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateTime) {
    let [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour) });
    return this;
}

function createTimeOutEvent(dateTime) {
    let [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour) });
    return this;
}

function hoursWorkedOnDate(date) {
    let inEvent = this.timeInEvents.find(e => e.date === date);
    let outEvent = this.timeOutEvents.find(e => e.date === date);
    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(e => e.date);
    const payable = eligibleDates.reduce((memo, d) => memo + wagesEarnedOnDate.call(this, d), 0);
    return payable;
};

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, emp) => total + allWagesFor.call(emp), 0);
}