import styles from "./styles.module.css";
import { useAppSelector, useAppDispatch } from "@/lib/hook.js";
import data from "@/data";
import Checkbox from "@/components/checkbox";
import { changeAddons } from "@/lib/features/addons/addonsSlice";
import { addPrefixAddonsPrice } from "@/utils.js";

export default function AddOns() {
  const billing = useAppSelector((state) => state.billing);
  const addons = useAppSelector((state) => state.addons);
  const dispatch = useAppDispatch();

  const handleCheck = (addonSelected) => {
    dispatch(
      changeAddons({ addon: addonSelected, isChecked: !addons[addonSelected] })
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Pick add-ons</h2>
      <p className={styles.descripcion}>
        Add-ons help enhance your gaming experience.
      </p>
      <div className={styles.container_addons}>
        {data.addons.map((addon, index) => {
          return (
            <div
              className={`${styles.container_addon} ${
                addons[addon] ? styles.selected_addon : ""
              }`}
              key={index}
              onClick={() => {
                handleCheck(addon);
              }}
            >
              <Checkbox isChecked={addons[addon]} />
              <div className={styles.container_addon_description}>
                <p className={styles.addon_title}>
                  {data.reemplazoTextAddons[addon]}
                </p>
                <p className={styles.addon_description}>
                  {data.descriptionAddons[addon]}
                </p>
              </div>
              <p className={styles.price}>
                {addPrefixAddonsPrice(
                  data[billing.billing].addons[addon],
                  billing.billing
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
