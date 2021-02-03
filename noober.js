async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let rides = json

  // 🔥 start here: write code to loop through the rides
 for (let i= 0; i < rides.length; i++) {
  let ride = rides [i]
    for(let j = 0; j < ride.length; j++) {
      if(ride.lenght > 1) {
        levelOfService = 'Noober Pool'
      } else if (ride[0].purpleRequested) {
        levelOfService = 'Noober Purple'
      } else if (ride[0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
      } else { 
        levelOfService = 'Noober X'
      }
        console.log(levelOfService)
        passenger1Name = `${ride[0].first}
  ${ride[0]. passengerDetials.last}`
        passenger1Phone = ride[0].passengerDetails.phoneNumber
        passenger1NumberOfPassengers =
  ride[0].numberOfPassengers
        passenger1PickupAddressLine1=
  ride[0].pickupLocation.passenger1PickupAddressLine1
        passenger1PickupAddressLine2 =
  `${ride[0].pickupLocation.City}, ${ride[0].pickupLocation.state}
  ${ride[0].pickupLocation.zip}`
        passenger1DropoffAddressLine1=
  ride[0].dropoffLocation.address
      passenger1DropoffAddressLine2 =
  `${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state}
  ${ride[0].dropoffLocation.zip}`
      console.log(passenger1Name)
      console.log(passenger1Phone)
      console.log(passenger1NumberOfPassengers)
      console.log(passenger1PickupAddressLine1)
      console.log(passenger1PickupAddressLine2)
      console.log(passenger1DropoffAddressLine1)
      console.log(passenger1DropoffAddressLine2)





    }

 }
  







}

window.addEventListener('DOMContentLoaded', pageLoaded)

