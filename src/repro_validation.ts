import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CreateTournamentDto } from './tournaments/dto/create-tournament.dto';

async function test() {
  console.log('STARTING TEST');

  const invalidData = {
    nombre: 'ab',
    cash: '100',
  };

  console.log('Invalid Data:', JSON.stringify(invalidData));

  const object = plainToInstance(CreateTournamentDto, invalidData);
  console.log('Transformed Instance:', JSON.stringify(object));
  console.log('Instance Constructor Name:', object.constructor.name);

  const errors = await validate(object);
  console.log('Validation Errors Count:', errors.length);

  if (errors.length > 0) {
    console.log('Validation FAILED (as expected). Errors:');
    console.log(JSON.stringify(errors, null, 2));
  } else {
    console.log('Validation PASSED (UNEXPECTEDLY).');
  }

  console.log('ENDING TEST');
}

test();
