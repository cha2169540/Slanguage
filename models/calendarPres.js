const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calendarPresSchema = new Schema(
    {
      language: {
        type: String
      },
      content: {
        imageUrl: {
          type: String
        },
        targetWord: {
          type: String
        },
        audioToPlay: {
          type: String
        },
        explanation: {
          type: String
        }
      }
    }
  )
  

const CalendarPres = mongoose.model("CalendarPres", calendarPresSchema);

module.exports = CalendarPres;