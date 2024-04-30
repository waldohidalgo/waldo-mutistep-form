import styles from "./styles.module.css";
import { useAppSelector, useAppDispatch } from "@/lib/hook.js";
import { changeStep } from "@/lib/features/step/stepSlice.js";
import data from "@/data";
import {
  addPrefixAddonsPrice,
  addPrefixPlanPrice,
  calculateTotal,
  addonsSelectedList,
} from "@/utils.js";

export default function AddOns() {
  const billing = useAppSelector((state) => state.billing);
  const planSelected = useAppSelector((state) => state.plan);
  const addonsSelected = useAppSelector((state) => state.addons);

  const dispatch = useAppDispatch();

  const addonsSelectedListArray = addonsSelectedList(addonsSelected);

  const handleChangePlan = () => {
    dispatch(changeStep(2));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Finishing up</h2>
      <p className={styles.descripcion}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={styles.planSelected}>
        <div className={styles.contenedor_planSelected_contenido}>
          <div className={styles.planSelected_descripcion}>
            <p className={styles.planSelected_descripcion_plan}>
              {planSelected.plan} ({billing.billing})
            </p>
            <p
              className={styles.planSelected_descripcion_change}
              onClick={handleChangePlan}
            >
              Change
            </p>
          </div>
          <span className={styles.planSelected_price}>
            {addPrefixPlanPrice(
              data[billing.billing].plan[planSelected.plan],
              billing.billing
            )}
          </span>
        </div>
        <div className={styles.addOnsSelected}>
          {addonsSelectedListArray.map((addon, index) => {
            return (
              <div className={styles.addOnSelected} key={index}>
                <span className={styles.addOnSelected_description}>
                  {data.reemplazoTextAddons[addon]}
                </span>
                <span className={styles.addOnSelected_price}>
                  {addPrefixAddonsPrice(
                    data[billing.billing].addons[addon],
                    billing.billing
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.total}>
        <span className={styles.total_description}>
          Total (per {billing.billing === "yearly" ? "year" : "month"})
        </span>
        <span className={styles.total_price}>
          {addPrefixAddonsPrice(
            calculateTotal(
              planSelected.plan,
              addonsSelectedListArray,
              billing.billing
            ),
            billing.billing
          )}
        </span>
      </div>
    </div>
  );
}
