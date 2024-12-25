import { column, defineDb, defineTable } from "astro:db";

export const Users = defineTable({
  columns: {
    userId: column.text({primaryKey: true}),
    userName: column.text({ optional: true }),
    userOccupation: column.text({ optional: true }),
    userEmproyeeType: column.text({ optional: true, deprecated: true }),
    userEmployeeType: column.text({ optional: true }),
  },
});

const Works = defineTable({
  columns: {
    workerId: column.text({ references: () => Users.columns.userId }),
    workYear: column.number({ optional: true }),
    workMonth: column.number({ optional: true }),
    workDate: column.number({ optional: true }),
    workDetail: column.text({ optional: true }),
    workStartTime: column.date({ optional: true }),
    workEndTime: column.date({ optional: true }),
    workOverReason: column.text({ optional: true }),
    workOverTime: column.text({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Users, Works },
});
