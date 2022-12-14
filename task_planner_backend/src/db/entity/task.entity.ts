import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('task')
export class TaskEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    task_id: number;


    @Column({
        nullable: true,

    })
    task_title: string;
    @Column({
        nullable:true,

    })
    task_description: string;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        nullable: false,
    })
    task_created_at: Date;
    @Column({
        //   type: "string",
        default:"Hello",
        nullable: true,
    })
    task_scheduled_at: string;
    @Column({
        default: true,
        nullable:true
    })
    task_is_archived: boolean;

}

