pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

//Contract made for this assignment
contract covidVaccineRegister {
  //VaccinationRecord structure used
  struct VaccinationRecord {
    string Name;
    string Surname;
    string VaccinationDate;
    string VaccinationName;
    string VaccinationPlace;
  }

  //This array will store all of the records of people taking the vaccine
  VaccinationRecord[] public vaccinationRecords;

  //Inserts 1 entry into the record using the vaccinationRecords structure
  function createVaccinationRecord(string calldata _Name, string calldata _Surname, string calldata _vaccineDate, string calldata _vaccineName, string calldata _vaccinePlace) external returns(uint){

    uint id = vaccinationRecords.push(VaccinationRecord(_Name, _Surname, _vaccineDate, _vaccineName, _vaccinePlace )) - 1;
    return id;
  }

  //Simply returns the number of vaccination records
  function getNumberOfVaccinations() external view returns(uint) {

    return vaccinationRecords.length;
  }

  //Returns a record
  function getVaccinationRecord(uint x) external view returns(VaccinationRecord memory) {
    VaccinationRecord memory record = vaccinationRecords[x];
    return record;
  }

  

}

//covidVaccineRegister.deployed().then(function(instance) { app = instance })
//createVaccinationRecord("Ryan","Davies","2021-01-01","Johnson","Claremont")