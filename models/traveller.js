const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let starts = [];
  this.journeys.forEach(function(location){
      starts.push(location.startLocation);
  });
  return starts;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let ends = [];
this.journeys.forEach(function(location){
    ends.push(location.endLocation);
});
return ends;
};

Traveller.prototype.getModesOfTransport = function () {
  let transportations = [];
this.journeys.forEach(function(journey){
    transportations.push(journey.transport);
});
return transportations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let sum = 0;
  this.journeys.forEach(function(journey){
      sum += journey.distance;
  });
  return sum;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
var transportations = this.getModesOfTransport();
var result = transportations.filter((value, index, self) => {
  return (self.indexOf(value) === index);
});
return result;
};



module.exports = Traveller;
