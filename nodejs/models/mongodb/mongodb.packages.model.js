module.exports = (mongo) => {
  let model;
  try {
    model = mongo.model('packages');
  } catch {
    const Schema = mongo.Schema;
    const modelPackages = new Schema({
      transaction_id: {
        type: String,
        required: true,
      },
      customer_name: {
        type: String,
        required: true,
      },
      customer_code: {
        type: String,
        required: true,
      },
      transaction_amount: {
        type: String,
        required: true,
      },
      transaction_discount: {
        type: String,
        required: true,
      },
      transaction_additional_field: {
        type: String,
      },
      transaction_payment_type: {
        type: String,
        required: true,
      },
      transaction_state: {
        type: String,
        required: true,
      },
      transaction_code: {
        type: String,
        required: true,
      },
      transaction_order: {
        type: Number,
        required: true,
      },
      location_id: {
        type: String,
        required: true,
      },
      organization_id: {
        type: Number,
        required: true,
      },
      created_at: {
        type: Date,
        default: new Date(),
      },
      updated_at: {
        type: Date,
        default: new Date(),
      },
      transaction_payment_type_name: {
        type: String,
        required: true,
      },
      transaction_cash_amount: {
        type: Number,
        required: true,
      },
      transaction_cash_change: {
        type: Number,
        required: true,
      },
      customer_attribute: new Schema({
        Nama_Sales: {
          type: String,
          required: true,
        },
        TOP: {
          type: String,
          required: true,
        },
        Jenis_Pelanggan: {
          type: String,
          required: true,
        }
      }),
      connote: new Schema({
        connote_id: {
          type: String,
          required: true,
        },
        connote_number: {
          type: Number,
          required: true,
        },
        connote_service: {
          type: String,
          required: true,
        },
        connote_service_price: {
          type: Number,
          required: true,
        },
        connote_amount: {
          type: Number,
          required: true,
        },
        connote_code: {
          type: String,
          required: true,
        },
        connote_booking_code: {
          type: String,
        },
        connote_order: {
          type: Number,
          required: true,
        },
        connote_state: {
          type: String,
          required: true,
        },
        connote_state_id: {
          type: Number,
          required: true,
        },
        zone_code_from: {
          type: String,
          required: true,
        },
        zone_code_to: {
          type: String,
          required: true,
        },
        surcharge_amount: {
          type: Number,
        },
        transaction_id: {
          type: String,
          required: true,
        },
        actual_weight: {
          type: Number,
          required: true,
        },
        volume_weight: {
          type: Number,
          required: true,
        },
        chargeable_weight: {
          type: Number,
          required: true,
        },
        created_at: {
          type: Date,
          default: new Date(),
        },
        updated_at: {
          type: Date,
          default: new Date(),
        },
        organization_id: {
          type: Number,
          required: true,
        },
        location_id: {
          type: String,
          required: true,
        },
        connote_total_package: {
          type: String,
          required: true,
        },
        connote_surcharge_amount: {
          type: String,
          required: true,
        },
        connote_sla_day: {
          type: String,
          required: true,
        },
        location_name: {
          type: String,
          required: true,
        },
        location_type: {
          type: String,
          required: true,
        },
        source_tariff_db: {
          type: String,
          required: true,
        },
        id_source_tariff: {
          type: String,
          required: true,
        },
        pod: {
          type: String,
        },
        history: {
          type: Array,
        },
      }),
      connote_id: {
        type: String,
        required: true,
      },
      origin_data: new Schema({
        customer_name: {
          type: String,
          required: true,
        },
        customer_address: {
          type: String,
          required: true,
        },
        customer_email: {
          type: String,
          required: true,
        },
        customer_phone: {
          type: String,
          required: true,
        },
        customer_address_detail: {
          type: String,
        },
        customer_zip_code: {
          type: String,
          required: true,
        },
        zone_code: {
          type: String,
          required: true,
        },
        organization_id: {
          type: Number,
          required: true,
        },
        location_id: {
          type: String,
          required: true,
        }
      }),
      destination_data: new Schema({
        customer_name: {
          type: String,
          required: true,
        },
        customer_address: {
          type: String,
          required: true,
        },
        customer_email: {
          type: String,
        },
        customer_phone: {
          type: String,
          required: true,
        },
        customer_address_detail: {
          type: String,
        },
        customer_zip_code: {
          type: String,
          required: true,
        },
        zone_code: {
          type: String,
          required: true,
        },
        organization_id: {
          type: Number,
          required: true,
        },
        location_id: {
          type: String,
          required: true,
        }
      }),
      koli_data: [new Schema({
        koli_length: {
          type: Number,
          required: true,
        },
        awb_url: {
          type: String,
          required: true,
        },
        created_at: {
          type: Date,
          default: new Date(),
        },
        koli_chargeable_weight: {
          type: Number,
          required: true,
        },
        koli_width: {
          type: Number,
          required: true,
        },
        koli_surcharge: {
          type: Array,
        },
        koli_height: {
          type: Number,
          required: true,
        },
        updated_at: {
          type: Date,
          default: new Date(),
        },
        koli_description: {
          type: String,
          required: true,
        },
        koli_formula_id: {
          type: String,
        },
        connote_id: {
          type: String,
          required: true,
        },
        koli_volume: {
          type: Number,
          required: true,
        },
        koli_weight: {
          type: Number,
          required: true,
        },
        koli_id: {
          type: String,
          required: true,
        },
        koli_custom_field: new Schema({
          awb_sicepat: {
            type: String,
          },
          harga_barang: {
            type: String,
          }
        }),
        koli_code: {
          type: String,
        }
      })],
      custom_field: new Schema({
        catatan_tambahan: {
          type: String,
          required: true,
        }
      }),
      currentLocation: new Schema({
        name: {
          type: String,
          required: true,
        },
        code: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        }
      }),
    }, {
      strict: false,
    });

    model = mongo.model('packages', modelPackages);
  }
  return model;
};