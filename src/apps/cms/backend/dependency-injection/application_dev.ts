import { ContainerBuilder } from 'node-dependency-injection';
import commonDI from './apps/application';

const register = (container: ContainerBuilder) => {
  commonDI(container);
};

export default register;
