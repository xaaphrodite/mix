const mevn = require("../models/mevn");

module.exports = class henllomevnController {
    /**
     * Display all listing of the resource.
     *
     * @return response
     */
    //! Fetch all post
    static async find(request, response) {
        try {
            const post = await mevn.find();
            response.status(200).json({
                data: post[0],
                // _csrf: request.csrfToken(),
            });
        } catch (error) {
            response.status(404).json({ message: "Not Found" });
        }
    }
};
