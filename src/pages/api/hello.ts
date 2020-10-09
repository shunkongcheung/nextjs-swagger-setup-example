import { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 *
 * components:
 *   hello:
 *     HelloResponse:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *
 * tags:
 *   - name: Hello
 *     description: A sample of API Group 
 *
 * /hello:
 *   get:
 *     description: A test API
 *     tags: [Hello]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         type: string
 *         description: Echo this name
 *     responses:
 *       201:
 *         description: Sample response
 *         schema:
 *           $ref: '#/components/hello/HelloResponse'

 *
 */

interface Data {
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name = "John Doe" } = req.query as any;
  res.statusCode = 200;
  res.json({ name });
};
