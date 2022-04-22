import Theory from "@modules/theories/entities/Theory";
import { 
  Column, 
  Entity,  
  JoinColumn,  
  OneToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { ITheory_text } from "../models/ITheory_text";

@Entity('theories_text')
class Theory_text implements ITheory_text {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(() => Theory, theory => theory.id)
  @JoinColumn({name: 'id_theory'})
  id_theory: string;

  @Column()
  theory: string;

  @UpdateDateColumn()
  updated_at: Date
}

export default Theory_text