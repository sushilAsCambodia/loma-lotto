// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      "success": true,
      "data": {
          "id": 11,
          "name": "M88",
          "brands": [
              {
                  "id": 6,
                  "name": "DaMaCai 4D",
                  "pivot": {
                      "company_id": "11",
                      "brand_id": "6",
                      "status": "enabled"
                  }
              },
              {
                  "id": 1,
                  "name": "Magnum sushil",
                  "pivot": {
                      "company_id": "11",
                      "brand_id": "1",
                      "status": "enabled"
                  }
              },
              {
                  "id": 2,
                  "name": "ToTo",
                  "pivot": {
                      "company_id": "11",
                      "brand_id": "2",
                      "status": "enabled"
                  }
              }
          ]
      },
      "message": "Bussiness retrieved successfully."
  }
      // [
      //   { id: 1, day_name: 'Saturday, 06 Aug' },
      //   { id: 2, day_name: 'Sunday, 07 Aug' },
      //   { id: 3, day_name: 'Wednesday, 10 Aug' }
      // ]
    )
}
