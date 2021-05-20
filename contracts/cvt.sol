pragma solidity ^0.5.0;

contract covidVaccineRegister {

  // define the struct Day1User
  struct VaccinationRecord {
    string Name;
    string Surname;
    string VaccinationDate;
    string VaccinationName;
    string VaccinationPlace;
  }

  // define the array of users
  VaccinationRecord[] public vaccinationRecords;

  function createVaccinationRecord(string calldata _Name, string calldata _Surname, string calldata _vaccineDate, string calldata _vaccineName, string calldata _vaccinePlace) external returns(uint){
    // get an instance of a Day1User using the input variables and push into the array of day1_users, returns the id
    uint id = vaccinationRecords.push(VaccinationRecord(_Name, _Surname, _vaccineDate, _vaccineName, _vaccinePlace )) - 1;
    
    // return the user id
    return id;
  }

  function getNumberOfVaccinations() external view returns(uint) {
    // return the length of the day1_users array
    return vaccinationRecords.length;
  }

  function getNumberOfVaccinations2() external view returns(uint) {
    // return the length of the day1_users array
    return vaccinationRecords.length;
  }

  

}