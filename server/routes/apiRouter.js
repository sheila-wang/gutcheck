const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');
const dashboardController = require('../controllers/dashboardController');

router.delete('/entry/:entryId', entryController.deleteEntry);
router.post(
  '/entry',
  entryController.verifyOrCreateFood,
  entryController.createEntry,
  (req, res) => {
    console.log('foodFdcId is ', res.locals.foodFdcId);
    res.status(200).json({ entryId: res.locals.entryId });
  }
);
//delete entry
// router.delete('/entry', );

//TODO: Get req to entry to populate all the entries for the day
router.get('/entry', entryController.getAllEntries, (req, res) => {
  // console.log('entries is ', res.locals.entries);
  res.status(200).json({ entries: res.locals.entries});
});


router.get('/dashboard', dashboardController.getData, (req,res) => {
  res.status(200).json(res.locals.data)
})


// router.get('/dashboard', (req, res) => {
//   res.status(200).json([
//     {
//       date: '2021-09-29',
//       foods: [
//         {
//           foodsId: 6,
//           fdcId: 721056,
//           foodName: 'spinach',
//         },
//         {
//           foodsId: 4,
//           fdcId: 1889244,
//           foodName: 'pepper',
//         },
//       ],
//     },
//     {
//       date: '2021-09-28',
//       foods: [
//         {
//           foodsId: 5,
//           fdcId: 386410,
//           foodName: 'quinoa',
//         }
//       ],
//     },
//     {
//       date: '2021-09-27',
//       foods: [
//         {
//           foodsId: 7,
//           fdcId: 360294 ,
//           foodName: 'brown rice',
//         }
//       ],
//     },
//     {
//       date: '2021-09-26',
//       foods: [
//         {
//           foodsId: 1,
//           fdcId: 1648210,
//           foodName: 'apple',
//         },
//         {
//           foodsId: 2,
//           fdcId: 1468381,
//           foodName: 'banana',
//         },
//       ],
//     },
//     {
//       date: '2021-09-25',
//       foods: [
//         {
//           foodsId: 1,
//           fdcId: 1648210,
//           foodName: 'apple',
//         },
//         {
//           foodsId: 2,
//           fdcId: 1468381,
//           foodName: 'banana',
//         },
//       ],
//     },
//     {
//       date: '2021-09-24',
//       foods: [
//         {
//           foodsId: 3,
//           fdcId: 1864680,
//           foodName: 'orange',
//         },
//       ],
//     },
// ]);
// });

module.exports = router;
