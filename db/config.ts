import { column, defineDb, defineTable } from 'astro:db';

const Users = defineTable({
  columns: {
    userId: column.text({primaryKey: true}),
    userName: column.text(),
    userOccupation: column.text(),
    userEmproyeeType: column.text(),
  }
})

const Works = defineTable({
  columns: {
    workerId: column.text({references: () => Users.columns.userId}),
    workYear: column.number(),
    workMonth: column.number(),
    workDate: column.number(),
    workDetail: column.text(),
    workStartTime: column.date(),
    workEndTime: column.date(),
    workOverReason: column.text(),
    workOverTime: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Users, Works}
});
