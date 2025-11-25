import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sala } from './entities/sala.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalasService {

  constructor(@InjectRepository(Sala) private salaRepository: Repository<Sala>) {}

  async create(createSalaDto: CreateSalaDto) {
    return await this.salaRepository.save(createSalaDto);
  }

  async findAll() {
    return await this.salaRepository.find();
  }

  async findOne(id: number) {
    return await this.salaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSalaDto: UpdateSalaDto) {
    return this.salaRepository.update(id, updateSalaDto);
  }

  async remove(id: number) {
    return this.salaRepository.delete(id);
  }
}
