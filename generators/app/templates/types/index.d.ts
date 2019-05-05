/**
 * @private
 * This shim allows us to use yml in typescript without the complier complaining.
 */
declare module "*.yml" {
  const value: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  export default value;
}
